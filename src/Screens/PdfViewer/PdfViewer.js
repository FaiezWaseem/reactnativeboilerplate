import * as React from 'react';
import { Box, Text, height, width, Row } from 'rn-faiez-components';
import color from '../../utils/color'
import { WebView } from 'react-native-webview';
import { SERVER_URL } from '../../utils/constant';
export default function PdfViewerscreen({ navigation, route }) {
  const { note} = route.params;
  const pdfLink =  SERVER_URL +'/notes/'+ note.title;
  console.log(pdfLink)

  const [pageLoadingProgress, setPageLoadingProgress] = React.useState(0);
  const handleShouldStartLoadWithRequest = (request) => {
    console.log(request.url)
    if (request.url.endsWith('.pdf')) {

      return false;
    }

    return true;
  };


  return (
    <Box flex={1} bg={color.white} >

      <Row
        w={pageLoadingProgress !== 0 ? pageLoadingProgress + '%' : '100%'}
        h={10}
        bg={'orange'}></Row>

        <WebView
          style={{ flex: 1 }}
          originWhitelist={['*']} 
          onShouldStartLoadWithRequest={handleShouldStartLoadWithRequest}
          source={{ html: getPdfHtml(pdfLink) }}
          onLoadProgress={({ nativeEvent }) => {
            setPageLoadingProgress(nativeEvent.progress.toFixed(2) * 100);
          }}
        />
    </Box >
  );
}


function getPdfHtml(url) {
  return `
  

<!doctype html>

<html lang="en">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>My PDF Viewer</title>
    <script src="http://cdnjs.cloudflare.com/ajax/libs/pdf.js/2.0.943/pdf.min.js">
    </script>
 
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        body {
            background-color: rgba(0, 0, 0, 1);
        }

        #canvas_container {
            width: 100%;
            height: 85vh;
            overflow: auto;
        }

        #canvas_container {
            background: #333;
            text-align: center;
            border: solid 3px;
        }

        .container {
            width: 100%;
            height: 100%;
            margin: auto;
        }

        #zoom_controls button {
            padding: 10px;
            margin-left: 10px;
            margin-right: 10px;
            min-width: 40px;
            min-height: 40px;
            font-size: 1em;
        }

        .button {
            background-color: #555555;
            border: none;
            color: white;
            padding: 15px 15px;
            text-align: center;
            text-decoration: none;
            display: inline-block;
            font-size: 16px;
            border-radius: 0.5em;
        }

        #navigation_controls {
            display: flex;
            justify-content: center;
            align-items: center;
            margin-top: 1rem;
        }

        #zoom_controls {
            display: flex;
            justify-content: center;
            align-items: center
        }
    </style>
</head>

<body>
<div id="navigation_controls">
    <button id="go_previous" class="button">Previous</button>
    <input id="current_page" value="1" type="number" disabled />
    <button id="go_next" class="button">Next</button>
</div>

<div id="zoom_controls">
    <button id="zoom_in" class="button">+</button>
    <button id="zoom_out" class="button">-</button>
</div>
<div class="container">
    <div id="my_pdf_viewer">
        <div id="canvas_container">
            <canvas id="pdf_renderer"></canvas>
        </div>
    </div>
</div>
   <script src="https://unpkg.com/vconsole@latest/dist/vconsole.min.js"></script>
    <script>
      var vConsole = new window.VConsole();
    </script>
<script>;
        var myState = {
            pdf: null,
            currentPage: 1,
            zoom: 1
        }
        let url = '${url}';
        pdfjsLib.getDocument(url).then((pdf) => {
            myState.pdf = pdf;
            render();

        });

        function render() {
            myState.pdf.getPage(myState.currentPage).then((page) => {

                var canvas = document.getElementById("pdf_renderer");
                var ctx = canvas.getContext('2d');

                var viewport = page.getViewport(myState.zoom);

                canvas.width = viewport.width;
                canvas.height = viewport.height;

                page.render({
                    canvasContext: ctx,
                    viewport: viewport
                });
            });
        }

        document.getElementById('go_previous').addEventListener('click', (e) => {
            if (myState.pdf == null || myState.currentPage == 1)
                return;
            myState.currentPage -= 1;
            document.getElementById("current_page").value = myState.currentPage;
            render();
        });

        document.getElementById('go_next').addEventListener('click', (e) => {
            if (myState.pdf == null || myState.currentPage > myState.pdf._pdfInfo.numPages)
                return;
            myState.currentPage += 1;
            document.getElementById("current_page").value = myState.currentPage;
            render();
        });

        document.getElementById('current_page').addEventListener('keypress', (e) => {
            if (myState.pdf == null) return;

            // Get key code
            var code = (e.keyCode ? e.keyCode : e.which);

            // If key code matches that of the Enter key
            if (code == 13) {
                var desiredPage =
                    document.getElementById('current_page').valueAsNumber;

                if (desiredPage >= 1 && desiredPage <= myState.pdf._pdfInfo.numPages) {
                    myState.currentPage = desiredPage;
                    document.getElementById("current_page").value = desiredPage;
                    render();
                }
            }
        });

        document.getElementById('zoom_in').addEventListener('click', (e) => {
            if (myState.pdf == null) return;
            myState.zoom += 0.5;
            render();
        });

        document.getElementById('zoom_out').addEventListener('click', (e) => {
            if (myState.pdf == null) return;
            myState.zoom -= 0.5;
            render();
        });
    </script>
</body>

</html>
  
  
  `;
}