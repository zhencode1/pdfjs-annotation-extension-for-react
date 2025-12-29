import { useState, useCallback, useRef } from 'react'
import { PDFViewer } from 'pdfjs-dist/types/web/pdf_viewer'
import { KeywordResult, MatchSnippet, PageMatch } from '@/types'

interface UsePdfSearchProps {
    pdfViewer: PDFViewer | null
}

interface SearchOptions {
    caseSensitive?: boolean
    entireWord?: boolean
    matchDiacritics?: boolean
}

async function getPageText(pdfViewer: PDFViewer, pageIndex: number, cache: Map<number, string>): Promise<string> {
    if (cache.has(pageIndex)) return cache.get(pageIndex)!
    const pageView = pdfViewer.getPageView(pageIndex)
    if (!pageView?.pdfPage) return ''
    const textContent = await pageView.pdfPage.getTextContent()
    const fullText = textContent.items.map((i: any) => i.str).join('')
    cache.set(pageIndex, fullText)
    return fullText
}

export function usePdfSearch({ pdfViewer }: UsePdfSearchProps) {
    const [query, setQuery] = useState('')
    const [results, setResults] = useState<KeywordResult[]>([])
    const [searching, setSearching] = useState(false)
    const [searchOptions, setSearchOptions] = useState<SearchOptions>({
        caseSensitive: false,
        entireWord: false,
        matchDiacritics: false
    })
    const textContentCache = useRef<Map<number, string>>(new Map())

    async function jumpToMatch({ pageNumber, matchIndex }: { pageNumber: number; matchIndex: number }) {
        if (!pdfViewer || !query) return
        const findController = pdfViewer.findController
        if (!findController) return
        const pdfDocument = pdfViewer.pdfDocument
        if (!pdfDocument) return

        pdfViewer.scrollPageIntoView({ pageNumber })

        findController._selected = { pageIdx: pageNumber - 1, matchIdx: matchIndex }
        // @ts-expect-error
        findController._offset = { pageIdx: pageNumber - 1, matchIdx: matchIndex - 1, wrapped: false }
        findController._highlightMatches = true

        pdfViewer.eventBus.dispatch('find', {
            type: 'again',
            query,
            caseSensitive: searchOptions.caseSensitive,
            entireWord: searchOptions.entireWord,
            findPrevious: false,
            matchDiacritics: searchOptions.matchDiacritics,
            highlightAll: true
        })
    }

    const search = useCallback(
        async (keyword: string, options?: SearchOptions) => {
            if (!pdfViewer) return
            setSearching(true)
            setQuery(keyword)
            setSearchOptions({ ...searchOptions, ...options })
            const resultsTemp: KeywordResult[] = []
            try {
                const res = await new Promise<KeywordResult>((resolve) => {
                    const pagesCount = pdfViewer.pagesCount
                    let retries = 0
                    const maxRetries = 60
                    const delay = 200

                    const handler = ({ source }: any) => {
                        const check = async () => {
                            if (source._pageMatches.length === pagesCount) {
                                pdfViewer.eventBus.off('updatefindcontrolstate', handler)

                                const pageMatches: PageMatch[] = []

                                for (let i = 0; i < source._pageMatches.length; i++) {
                                    const matchIndexes: number[] = source._pageMatches[i]
                                    if (!matchIndexes || matchIndexes.length === 0) continue

                                    const fullText = await getPageText(pdfViewer, i, textContentCache.current)

                                    const matches: MatchSnippet[] = matchIndexes.map((charIndex, matchIndex) => {
                                        const context = 30
                                        const start = Math.max(0, charIndex - 5)
                                        const end = Math.min(fullText.length, charIndex + keyword.length + context)

                                        return {
                                            matchIndex,
                                            charIndex,
                                            snippet: fullText.slice(start, end)
                                        }
                                    })

                                    pageMatches.push({
                                        pageNumber: i + 1,
                                        countTotal: matchIndexes.length,
                                        matches
                                    })
                                }

                                resolve({
                                    query: keyword,
                                    countTotal: source._matchesCountTotal,
                                    pageMatches
                                })
                            } else if (retries < maxRetries) {
                                retries++
                                setTimeout(check, delay)
                            } else {
                                pdfViewer.eventBus.off('updatefindcontrolstate', handler)
                                resolve({
                                    query: keyword,
                                    countTotal: 0,
                                    pageMatches: []
                                })
                            }
                        }
                        check()
                    }

                    pdfViewer.eventBus.on('updatefindcontrolstate', handler)

                    pdfViewer.eventBus.dispatch('find', {
                        type: 'highlightallchange',
                        query: keyword,
                        caseSensitive: options?.caseSensitive ?? false,
                        entireWord: options?.entireWord ?? false,
                        findPrevious: false,
                        matchDiacritics: options?.matchDiacritics ?? false,
                        highlightAll: true
                    })
                })

                resultsTemp.push(res)
            } catch (err) {
                console.error(err)
                resultsTemp.push({ query: keyword, countTotal: 0, pageMatches: [] })
            }

            setResults(resultsTemp)
            setSearching(false)
        },
        [pdfViewer]
    )

    const clearSearch = useCallback(() => {
        pdfViewer?.eventBus.dispatch('find', { query: '' })
        setQuery('')
        setResults([])
    }, [pdfViewer])

    return { query, setQuery, results, searching, search, clearSearch, jumpToMatch, searchOptions }
}
