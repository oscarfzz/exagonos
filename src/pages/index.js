import React from 'react'
import Layout from '../components/layout.js'
import { StaticImage } from "gatsby-plugin-image"

import Gradient from '../components/Gradient'
import SEO from '../components/seo.js'

const Home = () => {
  return (
<Layout location={'home'}>
  <SEO
    title={'▷ Restaurante Exagonos en Parla - 2021'}
    metaDescription={'Conoce Exagonos uno de los ✅ mejores Restaurantes en Parla ✅ Llevamos más de 50 años ofreciendo calidad a nuestros clientes.'}
  />
  <div className="relative bg-gray-50 pt-12 lg:pt-20 pb-12 md:pb-24">
    <div className="container mx-auto px-4">
      <div className="flex flex-wrap -mx-4">
        <div className="w-full lg:w-1/2 px-4 mb-12 md:mb-20 lg:mb-0 flex items-center">
          <div className="w-full text-center lg:text-left">
            <div className="max-w-md mx-auto lg:mx-0">
              <h1 className="mb-3 text-4xl lg:text-5xl font-bold font-heading">
                <span>Restaurante</span>
                <span className="text-red-600"> Exagonos Parla</span>
              </h1>
            </div>
            <div className="max-w-sm mx-auto lg:mx-0">
              <p className="mb-6 text-gray-400 leading-loose">Somos un Restaurante localizado en Parla con más de 50 años de funcionamiento, ofrecemos Raciones, Tapas, Hamburguesas y un gran ambiente.</p>
              <div><a className="inline-block mb-3 lg:mb-0 lg:mr-3 w-full lg:w-auto py-2 px-6 leading-loose bg-red-600 hover:bg-red-700 text-white font-semibold rounded-l-xl rounded-t-xl transition duration-200" href="#">REAPERTURA 23 JUNIO 2021</a></div>
            </div>
          </div>
        </div>
        <div className="w-full lg:w-1/2 px-4 flex items-center justify-center">
          <div className="relative" style={{zIndex: 0}}>
            <StaticImage className="h-128 w-full max-w-lg object-cover rounded-3xl md:rounded-br-none" src="../../static/images/exagonos-parla.png" />    
           <svg className="hidden md:block absolute" style={{top: '-2rem', right: '3rem', zIndex: -1}} width={98} height={98} viewBox="0 0 98 98" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" clipRule="evenodd" d="M0 49V0H49H50L49.99 0.00980377C76.595 0.537064 98 22.2688 98 49C98 76.062 76.062 98 49 98C21.938 98 0 76.062 0 49Z" fill="#0EA6E9" />
            </svg>
            <svg className="hidden md:block absolute" style={{bottom: '-2rem', right: '-2rem', zIndex: -1}} width="166" height="165" viewBox="0 0 166 165" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M82.9727 164.999C82.8152 165 82.6577 165 82.5 165C36.9365 165 0 128.063 0 82.5C0 36.9365 36.9365 0 82.5 0C128.063 0 165 36.9365 165 82.5C165 83.2975 164.989 84.0924 164.966 84.8844L165.21 165H82.9714L82.9727 164.999Z" fill="#FBBF23"/>
            </svg>
            <svg className="hidden md:block absolute" style={{top: '3rem', right: '-3rem', zIndex: -1}} width="115" height="157" viewBox="0 0 115 157" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M2.5 5C3.88071 5 5 3.88071 5 2.5C5 1.11929 3.88071 0 2.5 0C1.11929 0 0 1.11929 0 2.5C0 3.88071 1.11929 5 2.5 5Z" fill="#CBD5E1"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M46.5 5C47.8807 5 49 3.88071 49 2.5C49 1.11929 47.8807 0 46.5 0C45.1193 0 44 1.11929 44 2.5C44 3.88071 45.1193 5 46.5 5Z" fill="#CBD5E1"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M90.5 5C91.8807 5 93 3.88071 93 2.5C93 1.11929 91.8807 0 90.5 0C89.1193 0 88 1.11929 88 2.5C88 3.88071 89.1193 5 90.5 5Z" fill="#CBD5E1"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M24.5 5C25.8807 5 27 3.88071 27 2.5C27 1.11929 25.8807 0 24.5 0C23.1193 0 22 1.11929 22 2.5C22 3.88071 23.1193 5 24.5 5Z" fill="#CBD5E1"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M68.5 5C69.8807 5 71 3.88071 71 2.5C71 1.11929 69.8807 0 68.5 0C67.1193 0 66 1.11929 66 2.5C66 3.88071 67.1193 5 68.5 5Z" fill="#CBD5E1"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M112.5 5C113.881 5 115 3.88071 115 2.5C115 1.11929 113.881 0 112.5 0C111.119 0 110 1.11929 110 2.5C110 3.88071 111.119 5 112.5 5Z" fill="#CBD5E1"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M2.5 62C3.88071 62 5 60.8807 5 59.5C5 58.1193 3.88071 57 2.5 57C1.11929 57 0 58.1193 0 59.5C0 60.8807 1.11929 62 2.5 62Z" fill="#CBD5E1"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M46.5 62C47.8807 62 49 60.8807 49 59.5C49 58.1193 47.8807 57 46.5 57C45.1193 57 44 58.1193 44 59.5C44 60.8807 45.1193 62 46.5 62Z" fill="#CBD5E1"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M90.5 62C91.8807 62 93 60.8807 93 59.5C93 58.1193 91.8807 57 90.5 57C89.1193 57 88 58.1193 88 59.5C88 60.8807 89.1193 62 90.5 62Z" fill="#CBD5E1"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M24.5 62C25.8807 62 27 60.8807 27 59.5C27 58.1193 25.8807 57 24.5 57C23.1193 57 22 58.1193 22 59.5C22 60.8807 23.1193 62 24.5 62Z" fill="#CBD5E1"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M68.5 62C69.8807 62 71 60.8807 71 59.5C71 58.1193 69.8807 57 68.5 57C67.1193 57 66 58.1193 66 59.5C66 60.8807 67.1193 62 68.5 62Z" fill="#CBD5E1"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M112.5 62C113.881 62 115 60.8807 115 59.5C115 58.1193 113.881 57 112.5 57C111.119 57 110 58.1193 110 59.5C110 60.8807 111.119 62 112.5 62Z" fill="#CBD5E1"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M2.5 119C3.88071 119 5 117.881 5 116.5C5 115.119 3.88071 114 2.5 114C1.11929 114 0 115.119 0 116.5C0 117.881 1.11929 119 2.5 119Z" fill="#CBD5E1"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M46.5 119C47.8807 119 49 117.881 49 116.5C49 115.119 47.8807 114 46.5 114C45.1193 114 44 115.119 44 116.5C44 117.881 45.1193 119 46.5 119Z" fill="#CBD5E1"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M90.5 119C91.8807 119 93 117.881 93 116.5C93 115.119 91.8807 114 90.5 114C89.1193 114 88 115.119 88 116.5C88 117.881 89.1193 119 90.5 119Z" fill="#CBD5E1"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M24.5 119C25.8807 119 27 117.881 27 116.5C27 115.119 25.8807 114 24.5 114C23.1193 114 22 115.119 22 116.5C22 117.881 23.1193 119 24.5 119Z" fill="#CBD5E1"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M68.5 119C69.8807 119 71 117.881 71 116.5C71 115.119 69.8807 114 68.5 114C67.1193 114 66 115.119 66 116.5C66 117.881 67.1193 119 68.5 119Z" fill="#CBD5E1"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M112.5 119C113.881 119 115 117.881 115 116.5C115 115.119 113.881 114 112.5 114C111.119 114 110 115.119 110 116.5C110 117.881 111.119 119 112.5 119Z" fill="#CBD5E1"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M2.5 24C3.88071 24 5 22.8807 5 21.5C5 20.1193 3.88071 19 2.5 19C1.11929 19 0 20.1193 0 21.5C0 22.8807 1.11929 24 2.5 24Z" fill="#CBD5E1"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M46.5 24C47.8807 24 49 22.8807 49 21.5C49 20.1193 47.8807 19 46.5 19C45.1193 19 44 20.1193 44 21.5C44 22.8807 45.1193 24 46.5 24Z" fill="#CBD5E1"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M90.5 24C91.8807 24 93 22.8807 93 21.5C93 20.1193 91.8807 19 90.5 19C89.1193 19 88 20.1193 88 21.5C88 22.8807 89.1193 24 90.5 24Z" fill="#CBD5E1"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M24.5 24C25.8807 24 27 22.8807 27 21.5C27 20.1193 25.8807 19 24.5 19C23.1193 19 22 20.1193 22 21.5C22 22.8807 23.1193 24 24.5 24Z" fill="#CBD5E1"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M68.5 24C69.8807 24 71 22.8807 71 21.5C71 20.1193 69.8807 19 68.5 19C67.1193 19 66 20.1193 66 21.5C66 22.8807 67.1193 24 68.5 24Z" fill="#CBD5E1"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M112.5 24C113.881 24 115 22.8807 115 21.5C115 20.1193 113.881 19 112.5 19C111.119 19 110 20.1193 110 21.5C110 22.8807 111.119 24 112.5 24Z" fill="#CBD5E1"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M2.5 81C3.88071 81 5 79.8807 5 78.5C5 77.1193 3.88071 76 2.5 76C1.11929 76 0 77.1193 0 78.5C0 79.8807 1.11929 81 2.5 81Z" fill="#CBD5E1"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M46.5 81C47.8807 81 49 79.8807 49 78.5C49 77.1193 47.8807 76 46.5 76C45.1193 76 44 77.1193 44 78.5C44 79.8807 45.1193 81 46.5 81Z" fill="#CBD5E1"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M90.5 81C91.8807 81 93 79.8807 93 78.5C93 77.1193 91.8807 76 90.5 76C89.1193 76 88 77.1193 88 78.5C88 79.8807 89.1193 81 90.5 81Z" fill="#CBD5E1"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M24.5 81C25.8807 81 27 79.8807 27 78.5C27 77.1193 25.8807 76 24.5 76C23.1193 76 22 77.1193 22 78.5C22 79.8807 23.1193 81 24.5 81Z" fill="#CBD5E1"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M68.5 81C69.8807 81 71 79.8807 71 78.5C71 77.1193 69.8807 76 68.5 76C67.1193 76 66 77.1193 66 78.5C66 79.8807 67.1193 81 68.5 81Z" fill="#CBD5E1"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M112.5 81C113.881 81 115 79.8807 115 78.5C115 77.1193 113.881 76 112.5 76C111.119 76 110 77.1193 110 78.5C110 79.8807 111.119 81 112.5 81Z" fill="#CBD5E1"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M2.5 138C3.88071 138 5 136.881 5 135.5C5 134.119 3.88071 133 2.5 133C1.11929 133 0 134.119 0 135.5C0 136.881 1.11929 138 2.5 138Z" fill="#CBD5E1"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M46.5 138C47.8807 138 49 136.881 49 135.5C49 134.119 47.8807 133 46.5 133C45.1193 133 44 134.119 44 135.5C44 136.881 45.1193 138 46.5 138Z" fill="#CBD5E1"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M90.5 138C91.8807 138 93 136.881 93 135.5C93 134.119 91.8807 133 90.5 133C89.1193 133 88 134.119 88 135.5C88 136.881 89.1193 138 90.5 138Z" fill="#CBD5E1"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M24.5 138C25.8807 138 27 136.881 27 135.5C27 134.119 25.8807 133 24.5 133C23.1193 133 22 134.119 22 135.5C22 136.881 23.1193 138 24.5 138Z" fill="#CBD5E1"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M68.5 138C69.8807 138 71 136.881 71 135.5C71 134.119 69.8807 133 68.5 133C67.1193 133 66 134.119 66 135.5C66 136.881 67.1193 138 68.5 138Z" fill="#CBD5E1"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M112.5 138C113.881 138 115 136.881 115 135.5C115 134.119 113.881 133 112.5 133C111.119 133 110 134.119 110 135.5C110 136.881 111.119 138 112.5 138Z" fill="#CBD5E1"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M2.5 43C3.88071 43 5 41.8807 5 40.5C5 39.1193 3.88071 38 2.5 38C1.11929 38 0 39.1193 0 40.5C0 41.8807 1.11929 43 2.5 43Z" fill="#CBD5E1"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M46.5 43C47.8807 43 49 41.8807 49 40.5C49 39.1193 47.8807 38 46.5 38C45.1193 38 44 39.1193 44 40.5C44 41.8807 45.1193 43 46.5 43Z" fill="#CBD5E1"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M90.5 43C91.8807 43 93 41.8807 93 40.5C93 39.1193 91.8807 38 90.5 38C89.1193 38 88 39.1193 88 40.5C88 41.8807 89.1193 43 90.5 43Z" fill="#CBD5E1"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M24.5 43C25.8807 43 27 41.8807 27 40.5C27 39.1193 25.8807 38 24.5 38C23.1193 38 22 39.1193 22 40.5C22 41.8807 23.1193 43 24.5 43Z" fill="#CBD5E1"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M68.5 43C69.8807 43 71 41.8807 71 40.5C71 39.1193 69.8807 38 68.5 38C67.1193 38 66 39.1193 66 40.5C66 41.8807 67.1193 43 68.5 43Z" fill="#CBD5E1"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M112.5 43C113.881 43 115 41.8807 115 40.5C115 39.1193 113.881 38 112.5 38C111.119 38 110 39.1193 110 40.5C110 41.8807 111.119 43 112.5 43Z" fill="#CBD5E1"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M2.5 100C3.88071 100 5 98.8807 5 97.5C5 96.1193 3.88071 95 2.5 95C1.11929 95 0 96.1193 0 97.5C0 98.8807 1.11929 100 2.5 100Z" fill="#CBD5E1"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M46.5 100C47.8807 100 49 98.8807 49 97.5C49 96.1193 47.8807 95 46.5 95C45.1193 95 44 96.1193 44 97.5C44 98.8807 45.1193 100 46.5 100Z" fill="#CBD5E1"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M90.5 100C91.8807 100 93 98.8807 93 97.5C93 96.1193 91.8807 95 90.5 95C89.1193 95 88 96.1193 88 97.5C88 98.8807 89.1193 100 90.5 100Z" fill="#CBD5E1"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M24.5 100C25.8807 100 27 98.8807 27 97.5C27 96.1193 25.8807 95 24.5 95C23.1193 95 22 96.1193 22 97.5C22 98.8807 23.1193 100 24.5 100Z" fill="#CBD5E1"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M68.5 100C69.8807 100 71 98.8807 71 97.5C71 96.1193 69.8807 95 68.5 95C67.1193 95 66 96.1193 66 97.5C66 98.8807 67.1193 100 68.5 100Z" fill="#CBD5E1"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M112.5 100C113.881 100 115 98.8807 115 97.5C115 96.1193 113.881 95 112.5 95C111.119 95 110 96.1193 110 97.5C110 98.8807 111.119 100 112.5 100Z" fill="#CBD5E1"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M2.5 157C3.88071 157 5 155.881 5 154.5C5 153.119 3.88071 152 2.5 152C1.11929 152 0 153.119 0 154.5C0 155.881 1.11929 157 2.5 157Z" fill="#CBD5E1"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M46.5 157C47.8807 157 49 155.881 49 154.5C49 153.119 47.8807 152 46.5 152C45.1193 152 44 153.119 44 154.5C44 155.881 45.1193 157 46.5 157Z" fill="#CBD5E1"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M90.5 157C91.8807 157 93 155.881 93 154.5C93 153.119 91.8807 152 90.5 152C89.1193 152 88 153.119 88 154.5C88 155.881 89.1193 157 90.5 157Z" fill="#CBD5E1"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M24.5 157C25.8807 157 27 155.881 27 154.5C27 153.119 25.8807 152 24.5 152C23.1193 152 22 153.119 22 154.5C22 155.881 23.1193 157 24.5 157Z" fill="#CBD5E1"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M68.5 157C69.8807 157 71 155.881 71 154.5C71 153.119 69.8807 152 68.5 152C67.1193 152 66 153.119 66 154.5C66 155.881 67.1193 157 68.5 157Z" fill="#CBD5E1"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M112.5 157C113.881 157 115 155.881 115 154.5C115 153.119 113.881 152 112.5 152C111.119 152 110 153.119 110 154.5C110 155.881 111.119 157 112.5 157Z" fill="#CBD5E1"/>
            </svg>
            <svg className="hidden md:block absolute" style={{bottom: '2.5rem', left: '-4.5rem', zIndex: -1}} width="157" height="115" viewBox="0 0 157 115" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M152 2.5C152 3.88071 153.119 5 154.5 5C155.881 5 157 3.88071 157 2.5C157 1.11929 155.881 0 154.5 0C153.119 0 152 1.11929 152 2.5Z" fill="#1E293B"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M152 46.5C152 47.8807 153.119 49 154.5 49C155.881 49 157 47.8807 157 46.5C157 45.1193 155.881 44 154.5 44C153.119 44 152 45.1193 152 46.5Z" fill="#1E293B"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M152 90.5C152 91.8807 153.119 93 154.5 93C155.881 93 157 91.8807 157 90.5C157 89.1193 155.881 88 154.5 88C153.119 88 152 89.1193 152 90.5Z" fill="#1E293B"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M152 24.5C152 25.8807 153.119 27 154.5 27C155.881 27 157 25.8807 157 24.5C157 23.1193 155.881 22 154.5 22C153.119 22 152 23.1193 152 24.5Z" fill="#1E293B"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M152 68.5C152 69.8807 153.119 71 154.5 71C155.881 71 157 69.8807 157 68.5C157 67.1193 155.881 66 154.5 66C153.119 66 152 67.1193 152 68.5Z" fill="#1E293B"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M152 112.5C152 113.881 153.119 115 154.5 115C155.881 115 157 113.881 157 112.5C157 111.119 155.881 110 154.5 110C153.119 110 152 111.119 152 112.5Z" fill="#1E293B"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M95 2.5C95 3.88071 96.1193 5 97.5 5C98.8807 5 100 3.88071 100 2.5C100 1.11929 98.8807 0 97.5 0C96.1193 0 95 1.11929 95 2.5Z" fill="#1E293B"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M95 46.5C95 47.8807 96.1193 49 97.5 49C98.8807 49 100 47.8807 100 46.5C100 45.1193 98.8807 44 97.5 44C96.1193 44 95 45.1193 95 46.5Z" fill="#1E293B"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M95 90.5C95 91.8807 96.1193 93 97.5 93C98.8807 93 100 91.8807 100 90.5C100 89.1193 98.8807 88 97.5 88C96.1193 88 95 89.1193 95 90.5Z" fill="#1E293B"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M95 24.5C95 25.8807 96.1193 27 97.5 27C98.8807 27 100 25.8807 100 24.5C100 23.1193 98.8807 22 97.5 22C96.1193 22 95 23.1193 95 24.5Z" fill="#1E293B"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M95 68.5C95 69.8807 96.1193 71 97.5 71C98.8807 71 100 69.8807 100 68.5C100 67.1193 98.8807 66 97.5 66C96.1193 66 95 67.1193 95 68.5Z" fill="#1E293B"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M95 112.5C95 113.881 96.1193 115 97.5 115C98.8807 115 100 113.881 100 112.5C100 111.119 98.8807 110 97.5 110C96.1193 110 95 111.119 95 112.5Z" fill="#1E293B"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M38 2.5C38 3.88071 39.1193 5 40.5 5C41.8807 5 43 3.88071 43 2.5C43 1.11929 41.8807 0 40.5 0C39.1193 0 38 1.11929 38 2.5Z" fill="#1E293B"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M38 46.5C38 47.8807 39.1193 49 40.5 49C41.8807 49 43 47.8807 43 46.5C43 45.1193 41.8807 44 40.5 44C39.1193 44 38 45.1193 38 46.5Z" fill="#1E293B"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M38 90.5C38 91.8807 39.1193 93 40.5 93C41.8807 93 43 91.8807 43 90.5C43 89.1193 41.8807 88 40.5 88C39.1193 88 38 89.1193 38 90.5Z" fill="#1E293B"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M38 24.5C38 25.8807 39.1193 27 40.5 27C41.8807 27 43 25.8807 43 24.5C43 23.1193 41.8807 22 40.5 22C39.1193 22 38 23.1193 38 24.5Z" fill="#1E293B"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M38 68.5C38 69.8807 39.1193 71 40.5 71C41.8807 71 43 69.8807 43 68.5C43 67.1193 41.8807 66 40.5 66C39.1193 66 38 67.1193 38 68.5Z" fill="#1E293B"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M38 112.5C38 113.881 39.1193 115 40.5 115C41.8807 115 43 113.881 43 112.5C43 111.119 41.8807 110 40.5 110C39.1193 110 38 111.119 38 112.5Z" fill="#1E293B"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M133 2.5C133 3.88071 134.119 5 135.5 5C136.881 5 138 3.88071 138 2.5C138 1.11929 136.881 0 135.5 0C134.119 0 133 1.11929 133 2.5Z" fill="#1E293B"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M133 46.5C133 47.8807 134.119 49 135.5 49C136.881 49 138 47.8807 138 46.5C138 45.1193 136.881 44 135.5 44C134.119 44 133 45.1193 133 46.5Z" fill="#1E293B"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M133 90.5C133 91.8807 134.119 93 135.5 93C136.881 93 138 91.8807 138 90.5C138 89.1193 136.881 88 135.5 88C134.119 88 133 89.1193 133 90.5Z" fill="#1E293B"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M133 24.5C133 25.8807 134.119 27 135.5 27C136.881 27 138 25.8807 138 24.5C138 23.1193 136.881 22 135.5 22C134.119 22 133 23.1193 133 24.5Z" fill="#1E293B"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M133 68.5C133 69.8807 134.119 71 135.5 71C136.881 71 138 69.8807 138 68.5C138 67.1193 136.881 66 135.5 66C134.119 66 133 67.1193 133 68.5Z" fill="#1E293B"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M133 112.5C133 113.881 134.119 115 135.5 115C136.881 115 138 113.881 138 112.5C138 111.119 136.881 110 135.5 110C134.119 110 133 111.119 133 112.5Z" fill="#1E293B"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M76 2.5C76 3.88071 77.1193 5 78.5 5C79.8807 5 81 3.88071 81 2.5C81 1.11929 79.8807 0 78.5 0C77.1193 0 76 1.11929 76 2.5Z" fill="#1E293B"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M76 46.5C76 47.8807 77.1193 49 78.5 49C79.8807 49 81 47.8807 81 46.5C81 45.1193 79.8807 44 78.5 44C77.1193 44 76 45.1193 76 46.5Z" fill="#1E293B"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M76 90.5C76 91.8807 77.1193 93 78.5 93C79.8807 93 81 91.8807 81 90.5C81 89.1193 79.8807 88 78.5 88C77.1193 88 76 89.1193 76 90.5Z" fill="#1E293B"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M76 24.5C76 25.8807 77.1193 27 78.5 27C79.8807 27 81 25.8807 81 24.5C81 23.1193 79.8807 22 78.5 22C77.1193 22 76 23.1193 76 24.5Z" fill="#1E293B"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M76 68.5C76 69.8807 77.1193 71 78.5 71C79.8807 71 81 69.8807 81 68.5C81 67.1193 79.8807 66 78.5 66C77.1193 66 76 67.1193 76 68.5Z" fill="#1E293B"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M76 112.5C76 113.881 77.1193 115 78.5 115C79.8807 115 81 113.881 81 112.5C81 111.119 79.8807 110 78.5 110C77.1193 110 76 111.119 76 112.5Z" fill="#1E293B"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M19 2.5C19 3.88071 20.1193 5 21.5 5C22.8807 5 24 3.88071 24 2.5C24 1.11929 22.8807 0 21.5 0C20.1193 0 19 1.11929 19 2.5Z" fill="#1E293B"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M19 46.5C19 47.8807 20.1193 49 21.5 49C22.8807 49 24 47.8807 24 46.5C24 45.1193 22.8807 44 21.5 44C20.1193 44 19 45.1193 19 46.5Z" fill="#1E293B"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M19 90.5C19 91.8807 20.1193 93 21.5 93C22.8807 93 24 91.8807 24 90.5C24 89.1193 22.8807 88 21.5 88C20.1193 88 19 89.1193 19 90.5Z" fill="#1E293B"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M19 24.5C19 25.8807 20.1193 27 21.5 27C22.8807 27 24 25.8807 24 24.5C24 23.1193 22.8807 22 21.5 22C20.1193 22 19 23.1193 19 24.5Z" fill="#1E293B"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M19 68.5C19 69.8807 20.1193 71 21.5 71C22.8807 71 24 69.8807 24 68.5C24 67.1193 22.8807 66 21.5 66C20.1193 66 19 67.1193 19 68.5Z" fill="#1E293B"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M19 112.5C19 113.881 20.1193 115 21.5 115C22.8807 115 24 113.881 24 112.5C24 111.119 22.8807 110 21.5 110C20.1193 110 19 111.119 19 112.5Z" fill="#1E293B"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M114 2.5C114 3.88071 115.119 5 116.5 5C117.881 5 119 3.88071 119 2.5C119 1.11929 117.881 0 116.5 0C115.119 0 114 1.11929 114 2.5Z" fill="#1E293B"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M114 46.5C114 47.8807 115.119 49 116.5 49C117.881 49 119 47.8807 119 46.5C119 45.1193 117.881 44 116.5 44C115.119 44 114 45.1193 114 46.5Z" fill="#1E293B"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M114 90.5C114 91.8807 115.119 93 116.5 93C117.881 93 119 91.8807 119 90.5C119 89.1193 117.881 88 116.5 88C115.119 88 114 89.1193 114 90.5Z" fill="#1E293B"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M114 24.5C114 25.8807 115.119 27 116.5 27C117.881 27 119 25.8807 119 24.5C119 23.1193 117.881 22 116.5 22C115.119 22 114 23.1193 114 24.5Z" fill="#1E293B"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M114 68.5C114 69.8807 115.119 71 116.5 71C117.881 71 119 69.8807 119 68.5C119 67.1193 117.881 66 116.5 66C115.119 66 114 67.1193 114 68.5Z" fill="#1E293B"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M114 112.5C114 113.881 115.119 115 116.5 115C117.881 115 119 113.881 119 112.5C119 111.119 117.881 110 116.5 110C115.119 110 114 111.119 114 112.5Z" fill="#1E293B"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M57 2.5C57 3.88071 58.1193 5 59.5 5C60.8807 5 62 3.88071 62 2.5C62 1.11929 60.8807 0 59.5 0C58.1193 0 57 1.11929 57 2.5Z" fill="#1E293B"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M57 46.5C57 47.8807 58.1193 49 59.5 49C60.8807 49 62 47.8807 62 46.5C62 45.1193 60.8807 44 59.5 44C58.1193 44 57 45.1193 57 46.5Z" fill="#1E293B"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M57 90.5C57 91.8807 58.1193 93 59.5 93C60.8807 93 62 91.8807 62 90.5C62 89.1193 60.8807 88 59.5 88C58.1193 88 57 89.1193 57 90.5Z" fill="#1E293B"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M57 24.5C57 25.8807 58.1193 27 59.5 27C60.8807 27 62 25.8807 62 24.5C62 23.1193 60.8807 22 59.5 22C58.1193 22 57 23.1193 57 24.5Z" fill="#1E293B"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M57 68.5C57 69.8807 58.1193 71 59.5 71C60.8807 71 62 69.8807 62 68.5C62 67.1193 60.8807 66 59.5 66C58.1193 66 57 67.1193 57 68.5Z" fill="#1E293B"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M57 112.5C57 113.881 58.1193 115 59.5 115C60.8807 115 62 113.881 62 112.5C62 111.119 60.8807 110 59.5 110C58.1193 110 57 111.119 57 112.5Z" fill="#1E293B"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M0 2.5C0 3.88071 1.11929 5 2.5 5C3.88071 5 5 3.88071 5 2.5C5 1.11929 3.88071 0 2.5 0C1.11929 0 0 1.11929 0 2.5Z" fill="#1E293B"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M0 46.5C0 47.8807 1.11929 49 2.5 49C3.88071 49 5 47.8807 5 46.5C5 45.1193 3.88071 44 2.5 44C1.11929 44 0 45.1193 0 46.5Z" fill="#1E293B"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M0 90.5C0 91.8807 1.11929 93 2.5 93C3.88071 93 5 91.8807 5 90.5C5 89.1193 3.88071 88 2.5 88C1.11929 88 0 89.1193 0 90.5Z" fill="#1E293B"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M0 24.5C0 25.8807 1.11929 27 2.5 27C3.88071 27 5 25.8807 5 24.5C5 23.1193 3.88071 22 2.5 22C1.11929 22 0 23.1193 0 24.5Z" fill="#1E293B"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M0 68.5C0 69.8807 1.11929 71 2.5 71C3.88071 71 5 69.8807 5 68.5C5 67.1193 3.88071 66 2.5 66C1.11929 66 0 67.1193 0 68.5Z" fill="#1E293B"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M0 112.5C0 113.881 1.11929 115 2.5 115C3.88071 115 5 113.881 5 112.5C5 111.119 3.88071 110 2.5 110C1.11929 110 0 111.119 0 112.5Z" fill="#1E293B"/>
            </svg>
          </div>
        </div>
      </div>
    </div>
    </div>
  <Gradient/>
</Layout>
  )
}

export default Home
