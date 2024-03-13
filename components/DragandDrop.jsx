import { BookOpen, FileText, Folders, Headphones, ImagePlusIcon, Images, ImagesIcon, MonitorPlay, Upload } from 'lucide-react';
import React, { useState } from 'react';

const DragandDrop = () => {
    const [files, setFiles] = useState([]);

    const Drop = (e) => {
        e.preventDefault();
        const newFiles = Array.from(e.dataTransfer.files);
        setFiles(prevFiles => [...prevFiles, ...newFiles]);
      };
      const handleFileInputChange = (e) => {
        const newFiles = Array.from(e.target.files);
        setFiles(prevFiles => [...prevFiles, ...newFiles]);
      };
      const handlefileImport = () => {
        document.getElementById('fileInput').click();
      };
      

  return (
    <div className='flex flex-row items-start justify-start'>
    <div
      onDrop={Drop}
       onDragOver={(e) => e.preventDefault()}
      style={{  padding: '40px' }}
      className='rounded-3xl flex items-center justify-center border-[10px]  '
    >
        <div className=' flex items-center justify-center bg-pink-100 p-64 rounded-3xl  border-dashed border-2 border-pink-700    ' >
<div className='flex flex-col items-center justify-center border-dashed border-2 border-pink-700  rounded-lg w-72 p-3  gap-2 ' >
   <h2 className='text-pink-600 font-bold text-xl ' >Drag & Drop Files </h2>
      <h2 className='text-pink-400 text-lg ' >or</h2>
      <div className=' bg-pink-500  rounded-md flex flex-row items-center justify-start gap-1 p-2 '>
     <Upload color='white' />
      <button  onClick={handlefileImport}  className=' text-white text-lg '>
        Import From Computer</button>
      </div>
      </div>
      </div>
      </div>
      
      <div className='flex flex-col items-start justify-start    '>
        <div style={{width:'100%'}} className=' flex items-start justify-start  bg-pink-700  rounded-lg ' >
            <h1 className='text-pink-700' ></h1>
        </div>
        <div 
        
        className='flex flex-col items-start justify-start px-8 overflow-auto h-[800px] w-[640px]   ' >
        <div className='flex flex-row items-center justify-center gap-3 pb-10 pt-10 ' > 
        <BookOpen className='text-pink-600' />
           <h1 className='text-3xl font-semibold '>Liabrary</h1> 
           
        </div>
        <hr className='text-black' />
        <input
          type="file"
          id="fileInput"
          style={{ display: 'none' }}
          onChange={handleFileInputChange}
          multiple
        />
      {files.map((file, index) => (
        <div  key={index} style={{ paddingLeft: index % 2 !== 0 ? '82px' : '0' }}
        className='pb-5'
        >
           <div className=' flex flex-row items-start justify-start border-2 border-gray-300 rounded-lg p-3  gap-4 w-96  ' >
            <div className='bg-pink-200 p-4 rounded-lg ' >
            {getFileIcon(file.name)}
           </div>
           <div className='flex flex-col items-start justify-start gap-3 ' >
           <div className='text-center px-10 bg-gray-200 rounded-md ' >
           <h1 > {file.name}</h1>
           </div>
           <div className=' text-center bg-pink-300 w-36 rounded-md' >
            <h1 className='text-white' >Tags</h1>
           </div>
          
           </div>
           
            </div>
            <div className=' bg-pink-600 w-10 rounded-md ml-80 -mt-3  text-center text-white p-1 ' >
           {getFileName(file.name)}
           </div>
            </div>
            
      ))}
      </div>
    </div>
    
    </div>
 
  );
};

export default DragandDrop

const getFileIcon = (fileName) => {
    const extension = fileName.split('.').pop().toLowerCase();
    switch (extension) {
      case 'mp3':
        return <Headphones  className='text-pink-700'/>;
        case 'mp4':
            return <MonitorPlay className='text-pink-700' />
      case 'jpg':
      case 'jpeg':
      case 'png':
        return <ImagePlusIcon className='text-pink-700' />;
      case 'pdf':
        return <FileText className='text-pink-700' />;
      default:
        return <Folders className='text-pink-700' />;
    }
  };

  const getFileName = (fileName1) => {
    const extension = fileName1.split('.').pop().toLowerCase();
    switch (extension) {
      case 'mp3':
        return <h1>MP3</h1>
        case 'mp4':
            return <h1>MP4</h1>
        case 'jpg':
      case 'jpeg':
      case 'png':
        return <h1>Img</h1>
      case 'pdf':
        return <h1>PDF</h1>
      default:
        return <h1>FILE</h1>
    }
  };