import React from 'react';
import { PdfAnnotator } from '../features/annotator';

const PdfAnnotatorCustom: React.FC = () => {
    const pdfUrl = './compressed.tracemonkey-pldi-09.pdf';

    return (
        <div>
            <PdfAnnotator
                theme="violet"
                enableRange={false}
                title={<strong>PDF ANNOTATOR FULL</strong>}
                url={pdfUrl}
                defaultShowAnnotationsSidebar={true}
                user={{
                    id: '9527',
                    name: 'Lao Mai'
                }}
                enableNativeAnnotations={false}
                initialAnnotations={[
                    {
                        "id": "BzGHwy94HKi2Okm7ViT4a",
                        "pageNumber": 1,
                        "konvaString": "{\"attrs\":{\"name\":\"PdfjsExtension_Annotator_shape_group\",\"id\":\"BzGHwy94HKi2Okm7ViT4a\",\"draggable\":true,\"x\":-749.6292037573313,\"y\":-6.835132673383586,\"scaleX\":3.943030872970916,\"scaleY\":0.6223174668345937},\"className\":\"Group\",\"children\":[{\"attrs\":{\"x\":217.80000000000004,\"y\":38.400000000000006,\"width\":101.4,\"height\":71.4,\"strokeScaleEnabled\":false,\"stroke\":\"#da3324\"},\"className\":\"Rect\"}]}",
                        "konvaClientRect": {
                            "x": 105.21988950276341,
                            "y": 16.43954058623022,
                            "width": 407.7093922651926,
                            "height": 45.678102065659175
                        },
                        "title": "codefee",
                        "type": 5,
                        "pdfjsType": 5,
                        "subtype": "Square",
                        "color": "#da3324",
                        "date": "D:20251208201803+08'00'",
                        "contentsObj": {
                            "text": ""
                        },
                        "comments": [
                            {
                                "id": "yC7Jee40rC8KbgcphjwCN",
                                "title": "Lao Mai",
                                "date": "D:20251217153543+08'00'",
                                "content": "Reply"
                            }
                        ],
                        "user": {
                            "id": "9528",
                            "name": "codefee"
                        },
                        "native": false
                    },
                    {
                        "id": "5_nUkaoGZg83BUvownU4X",
                        "pageNumber": 1,
                        "konvaString": "{\"attrs\":{\"name\":\"PdfjsExtension_Annotator_shape_group\",\"id\":\"5_nUkaoGZg83BUvownU4X\"},\"className\":\"Group\",\"children\":[{\"attrs\":{\"x\":242.0265563964844,\"y\":136.3546875,\"width\":10.639984130859377,\"height\":15.3,\"opacity\":0.5,\"fill\":\"#b4fa56\"},\"className\":\"Rect\"},{\"attrs\":{\"x\":252.63281250000003,\"y\":135.8765625,\"width\":4.800000000000001,\"height\":9.3,\"opacity\":0.5,\"fill\":\"#b4fa56\"},\"className\":\"Rect\"},{\"attrs\":{\"x\":257.4046875,\"y\":136.3546875,\"width\":61.3131591796875,\"height\":15.3,\"opacity\":0.5,\"fill\":\"#b4fa56\"},\"className\":\"Rect\"},{\"attrs\":{\"x\":318.66562500000003,\"y\":135.8765625,\"width\":4.800000000000001,\"height\":9.3,\"opacity\":0.5,\"fill\":\"#b4fa56\"},\"className\":\"Rect\"},{\"attrs\":{\"x\":323.37656250000003,\"y\":136.3546875,\"width\":77.41497802734375,\"height\":15.3,\"opacity\":0.5,\"fill\":\"#b4fa56\"},\"className\":\"Rect\"},{\"attrs\":{\"x\":400.7953125,\"y\":135.8765625,\"width\":4.800000000000001,\"height\":9.3,\"opacity\":0.5,\"fill\":\"#b4fa56\"},\"className\":\"Rect\"},{\"attrs\":{\"x\":405.5109375,\"y\":136.3546875,\"width\":76.81281738281251,\"height\":15.3,\"opacity\":0.5,\"fill\":\"#b4fa56\"},\"className\":\"Rect\"},{\"attrs\":{\"x\":482.31562500000007,\"y\":135.8765625,\"width\":4.800000000000001,\"height\":9.3,\"opacity\":0.5,\"fill\":\"#b4fa56\"},\"className\":\"Rect\"},{\"attrs\":{\"x\":487.02656250000007,\"y\":136.3546875,\"width\":2.896875,\"height\":15.3,\"opacity\":0.5,\"fill\":\"#b4fa56\"},\"className\":\"Rect\"},{\"attrs\":{\"x\":93.51093750000001,\"y\":149.34375,\"width\":114.18312377929689,\"height\":15.3,\"opacity\":0.5,\"fill\":\"#b4fa56\"},\"className\":\"Rect\"},{\"attrs\":{\"x\":207.7125,\"y\":148.2046875,\"width\":4.78125,\"height\":11.100000000000001,\"opacity\":0.5,\"fill\":\"#b4fa56\"},\"className\":\"Rect\"},{\"attrs\":{\"x\":212.4234375,\"y\":149.34375,\"width\":65.34418945312501,\"height\":15.3,\"opacity\":0.5,\"fill\":\"#b4fa56\"},\"className\":\"Rect\"},{\"attrs\":{\"x\":277.725,\"y\":148.86562500000002,\"width\":4.800000000000001,\"height\":9.3,\"opacity\":0.5,\"fill\":\"#b4fa56\"},\"className\":\"Rect\"},{\"attrs\":{\"x\":282.49687500000005,\"y\":149.34375,\"width\":73.3573974609375,\"height\":15.3,\"opacity\":0.5,\"fill\":\"#b4fa56\"},\"className\":\"Rect\"},{\"attrs\":{\"x\":355.81406250000003,\"y\":148.86562500000002,\"width\":4.800000000000001,\"height\":9.3,\"opacity\":0.5,\"fill\":\"#b4fa56\"},\"className\":\"Rect\"},{\"attrs\":{\"x\":360.52500000000003,\"y\":149.34375,\"width\":67.73488769531251,\"height\":15.3,\"opacity\":0.5,\"fill\":\"#b4fa56\"},\"className\":\"Rect\"},{\"attrs\":{\"x\":428.27343750000006,\"y\":148.86562500000002,\"width\":4.800000000000001,\"height\":9.3,\"opacity\":0.5,\"fill\":\"#b4fa56\"},\"className\":\"Rect\"},{\"attrs\":{\"x\":432.98906250000005,\"y\":149.34375,\"width\":76.13206787109375,\"height\":15.3,\"opacity\":0.5,\"fill\":\"#b4fa56\"},\"className\":\"Rect\"},{\"attrs\":{\"x\":509.11875000000003,\"y\":148.86562500000002,\"width\":4.800000000000001,\"height\":9.3,\"opacity\":0.5,\"fill\":\"#b4fa56\"},\"className\":\"Rect\"},{\"attrs\":{\"x\":513.834375,\"y\":149.34375,\"width\":2.896875,\"height\":15.3,\"opacity\":0.5,\"fill\":\"#b4fa56\"},\"className\":\"Rect\"},{\"attrs\":{\"x\":68.296875,\"y\":162.253125,\"width\":70.93483886718751,\"height\":15.3,\"opacity\":0.5,\"fill\":\"#b4fa56\"},\"className\":\"Rect\"},{\"attrs\":{\"x\":139.1671875,\"y\":161.775,\"width\":4.800000000000001,\"height\":9.3,\"opacity\":0.5,\"fill\":\"#b4fa56\"},\"className\":\"Rect\"},{\"attrs\":{\"x\":143.9390625,\"y\":162.253125,\"width\":63.04229736328126,\"height\":15.3,\"opacity\":0.5,\"fill\":\"#b4fa56\"},\"className\":\"Rect\"},{\"attrs\":{\"x\":206.915625,\"y\":161.1890625,\"width\":4.78125,\"height\":11.100000000000001,\"opacity\":0.5,\"fill\":\"#b4fa56\"},\"className\":\"Rect\"},{\"attrs\":{\"x\":214.50468750000002,\"y\":162.253125,\"width\":72.16446533203126,\"height\":15.3,\"opacity\":0.5,\"fill\":\"#b4fa56\"},\"className\":\"Rect\"},{\"attrs\":{\"x\":286.659375,\"y\":161.1890625,\"width\":4.78125,\"height\":11.100000000000001,\"opacity\":0.5,\"fill\":\"#b4fa56\"},\"className\":\"Rect\"},{\"attrs\":{\"x\":294.1875,\"y\":162.253125,\"width\":66.44915771484375,\"height\":15.3,\"opacity\":0.5,\"fill\":\"#b4fa56\"},\"className\":\"Rect\"}]}",
                        "konvaClientRect": {
                            "x": 68.296875,
                            "y": 135.8765625,
                            "width": 448.43437500000005,
                            "height": 41.67656250000002
                        },
                        "title": "Lao Mai",
                        "type": 1,
                        "pdfjsType": 9,
                        "subtype": "Highlight",
                        "color": "#b4fa56",
                        "date": "D:20251231222401+08'00'",
                        "contentsObj": {
                            "text": "ch∗, Mike Shaver∗, David Ander... Rick Reitmaier#, Michael Bebe"
                        },
                        "comments": [],
                        "user": {
                            "id": "9527",
                            "name": "Lao Mai"
                        },
                        "native": false
                    }
                ]}
                actions={(props) => (
                    <>
                        <button onClick={() => props.save()}>save</button>
                        <button onClick={() => {
                            console.log(props.getAnnotations())
                        }}>getAnnotations</button>
                        <button onClick={() => props.exportToExcel('Export Excel')}>Export Excel</button>
                        <button onClick={() => props.exportToPdf('Export pdf')}>Export PDF</button>
                    </>
                )}
                layoutStyle={{ height: '96vh' }}
                locale='en-US'
                onSave={(data) => {
                    alert(JSON.stringify(data));
                }}
                onLoad={() => {
                    console.log('🎉 PDF Loaded...')
                }}
                onAnnotationAdded={(annotation) => {
                    console.log('➕ Add', annotation)
                }}
                onAnnotationDeleted={(id) => {
                    console.log('➖ Delete', id)
                }}
                onAnnotationUpdated={(annotation) => {
                    console.log('✏️ Updated', annotation)
                }}
                onAnnotationSelected={(annotation, isClick) => {
                    console.log('👉 Selected', annotation, isClick)
                }}
            />
        </div>
    );
}
export default PdfAnnotatorCustom;
