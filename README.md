<div>
    <h1 align="center"><code>pdfjs-annotation-extension-for-react</code> ⚡️ </h1>
    <p align="center">
        <strong>A lightweight, extensible React PDF annotator and viewer built on top of PDF.js</strong><br/> Supporting the editing of existing PDF file annotations, posting comments, replying, submitting annotation data, and loading for further editing.
    </p>
</div>

---

[![NPM](https://img.shields.io/npm/v/pdfjs-annotation-extension-for-react.svg)](https://www.npmjs.com/package/pdfjs-annotation-extension-for-react)
[![License](https://img.shields.io/npm/l/pdfjs-annotation-extension-for-react)](./LICENSE)

## Online Demo

[![Demo](https://img.shields.io/badge/🔥_Live_Demo-React_PDF_Viewer_Plus-FF6F61?style=for-the-badge&logo=github&logoColor=white)](https://laomai-codefee.github.io/pdfjs-annotation-extension-for-react-demo/)

## ✨ Features
- ✍️ Rich annotation system
  - Highlight, drawing, shapes, text notes
  - Signatures (draw / enter / upload)
  - Stamps with editor support
  - Edit native PDF annotations directly
- 📄 High-fidelity PDF rendering based on PDF.js
- 🎨 Theme system based on Radix UI Themes
- 🌍 Internationalization (zh-CN, en-US)
- 🧩 Highly customizable UI
  - Toolbar / Sidebar / Actions fully overridable
- 🏢 Enterprise-friendly configuration
  - `defaultOptions` supports DeepPartial + Deep Merge
- 💾 Export
  - Export annotations to PDF
  - Export annotations to Excel
- 🧠 Designed for extensibility
  - Clean context & extension architecture

## ✍️ Annotation Tools
1. Rectangle
2. Circle
3. Free Hand (grouped if drawn within a short time)
4. Free Highlight (with auto-correction)
5. Arrow
6. Cloud
7. FreeText 
8. Signature
9. Stamp (upload custom images)
10. Text Highlight
11. Text Strikeout
12. Text Underline
13. Text

## ✍️ Editing existing annotations in PDF files
1. Square
2. Circle
3. Ink
4. FreeText
5. Line
6. Polygon
7. PolyLine
8. Text
9. Highlight
10. Underline
11. StrikeOut

## 📦 Installation

```bash
npm install pdfjs-annotation-extension-for-react
or
yarn add pdfjs-annotation-extension-for-react
```

# 🚀 Quick Start

## 1. PDF Annotator
```jsx
import { PdfAnnotator } from 'pdfjs-annotation-extension-for-react'
import 'pdfjs-annotation-extension-for-react/style'

export default function App() {
  return (
    <PdfAnnotator
      title="PDF Annotator"
      url="https://example.com/sample.pdf"
      user={{ id: 'u1', name: 'Alice' }}
      onSave={(annotations) => {
        console.log('Saved annotations:', annotations)
      }}
    />
  )
}
```

## 2. Basic PDF Viewer

```jsx
import { PdfViewer } from 'pdfjs-annotation-extension-for-react'
import 'pdfjs-annotation-extension-for-react/style'

export default function App() {
  return (
    <PdfViewer
      title="PDF Viewer"
      url="https://example.com/sample.pdf"
      layoutStyle={{ width: '100vw', height: '100vh' }}
    />
  )
}
```


# 🧩 Components
## ✍️ PdfAnnotator

An advanced PDF viewer with annotation capabilities.

### Props

| Prop                      | Type                            | Default                           | Description                 |
| ------------------------- | ------------------------------- | --------------------------------- | --------------------------- |
| `user`                    | `{ id: string; name: string }`  | `{ id: 'null', name: 'unknown' }` | Annotation author           |
| `enableNativeAnnotations` | `boolean`                       | `false`                           | Load native PDF annotations |
| `initialAnnotations`      | `IAnnotationStore[]`            | `[]`                              | Existing annotations        |
| `defaultOptions`          | `DeepPartial`                   | -                                 | Default annotator options   |
| `onSave`                  | `(annotations) => void`         | -                                 | Save callback               |
| `onLoad`                  | `() => void`                    | -                                 | Load complete               |
| `onAnnotationAdded`       | `(annotation) => void`          | -                                 | Add callback                |
| `onAnnotationDeleted`     | `(id) => void`                  | -                                 | Delete callback             |
| `onAnnotationUpdated`     | `(annotation) => void`          | -                                 | Update callback             |
| `onAnnotationSelected`    | `(annotation, isClick) => void` | -                                 | Select callback             |
| `actions`                 | `ReactNode | Component`         | -                                 | Custom action buttons       |

### ⚙️ defaultOptions (Enterprise Design)

#### ✅ DeepPartial + Deep Merge

`defaultOptions` is not a full config override.

- It is defined as `DeepPartial<PdfAnnotatorOptions> `
- It will be deep merged with the system default configuration

This ensures:

- You only override what you need
- System defaults remain stable
- Safe for long-term enterprise use

#### Example

```tsx
import qiantubifengshouxietiFont from './fonts/qiantubifengshouxieti.ttf';

<PdfAnnotator
    url="sample.pdf"
    defaultOptions={{
        colors: ['#000', '#1677ff'],
        signature: {
            colors: ['#000000', '#ff0000', '#1677ff'],
            type: 'Upload',
            maxSize: 1024 * 1024 * 5,
            accept: '.png,.jpg,.jpeg,.bmp',
            defaultSignature: ['data:image/png;base64,...'],
            defaultFont: [
                {
                    label: '楷体',
                    value: 'STKaiti',
                    external: false
                },
                {
                    label: '千图笔锋手写体',
                    value: 'qiantubifengshouxieti',
                    external: true,
                    url: qiantubifengshouxietiFont
                },
                {
                    label: '平方长安体',
                    value: 'PingFangChangAnTi-2',
                    external: true,
                    url: 'http://server/PingFangChangAnTi-2.ttf'
                }
            ]
        },
        stamp: {
            maxSize: 1024 * 1024 * 5,
            accept: '.png,.jpg,.jpeg,.bmp',
            defaultStamp: ['data:image/png;base64,...'],
            editor: {
                defaultBackgroundColor: '#2f9e44',
                defaultBorderColor: '#2b8a3e',
                defaultBorderStyle: 'none',
                defaultTextColor: '#fff',
                defaultFont: [
                    {
                        label: '楷体',
                        value: 'STKaiti'
                    }
                ]
            }
        }
    }}
/>
```

### 🎨 Custom UI

#### Custom Actions

```jsx
<PdfAnnotator
  url={pdfUrl}
  actions={({ save, exportToPdf, exportToExcel }) => (
    <>
      <button onClick={save}>Save</button>
      <button onClick={() => exportToPdf('annotations')}>
        Export PDF
      </button>
      <button onClick={() => exportToExcel('annotations')}>
        Export Excel
      </button>
    </>
  )}
/>
```

### 🖋 Signature & Stamp Configuration

```jsx
<PdfAnnotator
  url={pdfUrl}
  defaultOptions={{
    signature: {
      defaultSignature: ['data:image/png;base64,...'],
      defaultFont: [
        {
          label: 'Custom Font',
          value: 'MyFont',
          external: true,
          url: '/fonts/myfont.ttf'
        }
      ]
    },
    stamp: {
      defaultStamp: ['data:image/png;base64,...']
    }
  }}
/>
```


## 📄 PdfViewer

A lightweight PDF viewer with toolbar, sidebar, actions and extensible UI slots.

### Props

| Prop                 | Type                             | Default                               | Description             |
| -------------------- | -------------------------------- | ------------------------------------- | ----------------------- |
| `theme`              | Radix Theme Color                | `'violet'`                            | Viewer theme color      |
| `title`              | `ReactNode`                      | -                                     | Page title              |
| `url`                | `string | URL`                   | **required**                          | PDF file URL            |
| `locale`             | `'zh-CN' | 'en-US'`              | `'zh-CN'`                             | UI language             |
| `initialScale`       | `PdfScale`                       | `'auto'`                              | Initial zoom            |
| `layoutStyle`        | `CSSProperties`                  | `{ width: '100vw', height: '100vh' }` | Container style         |
| `isSidebarCollapsed` | `boolean`                        | `true`                                | Sidebar collapsed state |
| `showSidebarTrigger` | `boolean`                        | `false`                               | Show sidebar toggle     |
| `showTextLayer`      | `boolean`                        | `true`                                | Enable text selection   |
| `actions`            | `ReactNode | (ctx) => ReactNode` | -                                     | Custom action area      |
| `sidebar`            | `ReactNode | (ctx) => ReactNode` | -                                     | Custom sidebar          |
| `toolbar`            | `ReactNode | (ctx) => ReactNode` | ZoomTool                              | Custom toolbar          |
| `onDocumentLoaded`   | `(pdfViewer) => void`            | -                                     | PDF loaded callback     |
| `onEventBusReady`    | `(eventBus) => void`             | -                                     | PDF.js EventBus ready   |

### 🎨 Custom UI

#### Custom Toolbar

```jsx
<PdfViewer
  url={pdfUrl}
  toolbar={(context) => (
    <>
    <button onClick={() => console.log(context.pdfViewer)}>
        PDF Viewer
    </button>
    <button onClick={context.toggleSidebar}>
        Toggle Sidebar
    </button>
    <button onClick={() => context.setSidebarCollapsed(false)}>
        Open Sidebar
    </button>
    <button onClick={() => context.setSidebarCollapsed(true)}>
        Close Sidebar
    </button>
</>
  )}
/>
```

### Custom Sidebar

```jsx
<PdfViewer
  url={pdfUrl}
  sidebar={(context) => (
    <>
    <button onClick={() => console.log(context.pdfViewer)}>
        PDF Viewer
    </button>
    <button onClick={() => {
        context.pdfViewer?.scrollPageIntoView({
            pageNumber: 1
        })
    }}>
        page1
    </button>
    <button onClick={() => {
        context.pdfViewer?.scrollPageIntoView({
            pageNumber: 10
        })
    }}>
        page 10
    </button>
    <button onClick={() => {
        context.pdfViewer?.scrollPageIntoView({
            pageNumber: 100
        })
    }}>
        page 100
    </button>
</>
  )}
/>
```

### Custom Actions

```jsx
<PdfViewer
  url={pdfUrl}
  actions={(context) => (
    <>
        <button onClick={() => console.log(context.pdfViewer)}>
            PDF Viewer
        </button>
        <button onClick={context.toggleSidebar}>
            Toggle Sidebar
        </button>
        <button onClick={() => context.setSidebarCollapsed(false)}>
            Open Sidebar
        </button>
        <button onClick={() => context.setSidebarCollapsed(true)}>
            Close Sidebar
        </button>
    </>
  )}
/>
```

---


# 🌍 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

# 📄 License

MIT

