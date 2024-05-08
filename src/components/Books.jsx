import React, { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
// import Button from "react-bootstrap/Button";
import { AiOutlineDownload } from "react-icons/ai";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import pdf from "../assets/ex1.pdf";
import './Home.css'
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

function Books() {
  const [numPages, setNumPages] = useState(null);
  const [width, setWidth] = useState(600); // Decreased width

  useEffect(() => {
    function handleResize() {
      setWidth(window.innerWidth * 0.6); // Adjusting width based on window size
    }

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  return (
    <div>
   
      <Container fluid className="resume-section">
        
        <Row style={{ justifyContent: "center", position: "relative" }}>
         <h1 style={{color: "red"}}>Exercises</h1>
        </Row>

        <Row className="resume" style={{ justifyContent: "center", overflow: "hidden" }}>
          <div style={{ display: "flex", justifyContent: "center", width: "100%" }}>
            <Document file={pdf} onLoadSuccess={onDocumentLoadSuccess}>
              {Array.from(new Array(numPages), (el, index) => (
                <Page
                  key={`page_${index + 1}`}
                  pageNumber={index + 1}
                  scale={width > 786 ? 1.9 : 1.4} // Adjusted scale
                  width={width}
                  renderTextLayer={false} // Disable text layer to improve rendering performance
                  style={{ margin: 0, padding: 0 }} // Remove margin and padding
                />
              ))}
            </Document>
          </div>
        </Row>

        <Row style={{ justifyContent: "center", position: "relative" }}>
        
        </Row>
      </Container>
    </div>
  );
}

export default Books;
// import React, { useState, useEffect } from "react";
// import { Container, Row } from "react-bootstrap";
// import Button from "react-bootstrap/Button";

// import pdf from "../assets/ex.pdf";
// import { AiOutlineDownload } from "react-icons/ai";
// import { Document, Page, pdfjs } from "react-pdf";
// import "react-pdf/dist/esm/Page/AnnotationLayer.css";
// pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

// function Books() {
//   const [width, setWidth] = useState(1200);

//   useEffect(() => {
//     setWidth(window.innerWidth);
//   }, []);

//   return (
//     <div>
//       <br></br>
//       <br></br>
//       <br></br>
//       <br></br>
//       <br></br>
//       <Container fluid className="resume-section">
      
//         <Row style={{ justifyContent: "center", position: "relative" }}>
//           {/* <Button
//             variant="primary"
//             href={pdf}
//             target="_blank"
//             style={{ maxWidth: "250px" }}
//           >
//             <AiOutlineDownload />
//             &nbsp;Download CV
//           </Button> */}
//         </Row>

//         <Row className="resume" >
//           <Document file={pdf} className="d-flex justify-content-center">
//             <Page pageNumber={pageNumber} scale={width > 786 ? 1.7 : 0.6} />
//           </Document>
//         </Row>

//         <Row style={{ justifyContent: "center", position: "relative" }}>
//           <Button
//             variant="primary"
//             href={pdf}
//             target="_blank"
//             style={{ maxWidth: "250px" }}
//           >
//             <AiOutlineDownload />
//             &nbsp;Download CV
//           </Button>
//         </Row>
//       </Container>
//     </div>
//   );
// }

// export default Books;