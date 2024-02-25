import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { React, lazy } from 'react'
import './App.css'
import Header from './components/Header'
import Main from './components/Main'
// import BookList from './components/BookList'
import Footer from './components/Footer'
import BookDetails from './components/BookDetails'
import BookCategory from './components/BookCategory'
import { pdfjs } from 'react-pdf';
import PdfViewerComponent from '../src/components/PdfViewer'

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  'pdfjs-dist/build/pdf.worker.min.js',
  import.meta.url,
).toString();
// const PdfViewerComponent = lazy(() => import('./components/PdfViewer'))

const BookList = lazy(()=> import(('./components/BookList')))
function App() {
  return (
    <BrowserRouter>
      <Header />
      <Main>

        <Routes>
          <Route path='/' element={<BookList />} />
          <Route path='/books/:id' element={<BookDetails />} />
          <Route path='/category' element={<BookCategory />} />
          <Route path='/viewer' element={<PdfViewerComponent />} />
        </Routes>
      </Main>
      <Footer />
    </BrowserRouter>
  )
}

export default App
