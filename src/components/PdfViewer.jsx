import { useState } from 'react';
import { Document, Page } from 'react-pdf';

function PdfViewerComponent() {
  const [numPages, setNumPages] = useState();
  const [pageNumber, setPageNumber] = useState(1);
  const [controls,setControls] = useState(false)

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
    setControls(true)
  }


  return (
    <div className='flex justify-center min-h-screen'>
      <div className='h-full'>
        <Document file="1.pdf" onLoadSuccess={onDocumentLoadSuccess}>
          {Array.apply(null,Array(10))
            .map((x,i)=> i+1)
            .map((page)=>{
              return(
                <div>
                  <Page className='max-sm:block hidden border border-gray-300 my-3' scale={0.86} pageNumber={page} renderTextLayer={false} renderAnnotationLayer={false} />
                  <Page className='sm:block md:hidden hidden border border-gray-300 my-3' scale={1.2} pageNumber={page} renderTextLayer={false} renderAnnotationLayer={false} />
                  <Page className='md:block lg:hidden hidden border border-gray-300 my-3' scale={1.5} pageNumber={page} renderTextLayer={false} renderAnnotationLayer={false} />
                  <Page className='lg:block xl:hidden hidden border border-gray-300 my-3' scale={1.8} pageNumber={page} renderTextLayer={false} renderAnnotationLayer={false} />
                  <Page className='xl:block hidden border border-gray-300 my-3' scale={2} pageNumber={page} renderTextLayer={false} renderAnnotationLayer={false} />
                </div>
              )
            })    
          
          }
          <Page className='border hidden border-gray-300 my-3 pdfview' scale={1.3} pageNumber={pageNumber} renderTextLayer={false} renderAnnotationLayer={false} />
          
        </Document>
        {controls && 
          <div className='flex items-center justify-center py-4 font-semibold  '>
            {/* <button onClick={() => setPageNumber(pageNumber - (pageNumber != 1))} className='mr-10 border border-black rounded-full p-1'>
              <FaArrowLeft size={30} />
            </button>
            <p className='text-xl'>
              Page {pageNumber} of {numPages}
            </p>
            <button onClick={() => setPageNumber(pageNumber + (pageNumber != numPages))} className='ml-10 border border-black rounded-full p-1'>
              <FaArrowRight size={30} />
            </button> */}
          </div>
        }
      </div>
    </div>
  );
}
export default PdfViewerComponent;