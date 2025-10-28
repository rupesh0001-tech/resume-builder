import React, { useEffect, useState } from 'react'
import Title from './../components/TItle/Title.jsx';
import { dummyResumeData } from '../assets/assets.js';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {


  const colors = [
    "#1E3A8A", // deep royal blue  
    "#C62828", // strong crimson red  
    "#2E7D32", // deep forest green  
    "#E65100", // burnt orange  
  ];
  let [resumeData, setResumedata] = useState([]);
  let [hoverOnHistory, setHoverOnHistory] = useState(false);
  let [createResume, setCreateResume] = useState(false);
  let [uploadResume, setUploadResume] = useState(false);
  let [resumeId, setResumeId] = useState('');
  let [formTitle, setFormTitle] = useState('');


  const chnageFormtitle = (e) => {
    setFormTitle(e.target.value)
  }




  const addData = async () => {
    setResumedata(dummyResumeData);
  }

  const createNewResume = async () => {
  const newId = 'resume123';
  setResumeId(newId);
  navigate(`/app/builder/${newId}`);
};

  const navigate = useNavigate();

  useEffect(() => {
    addData();
  }, [])

  return (

    <>
      <div className="dashboard px-30 py-5 duration-150 ease-in-out  ">
        <Title title={'Hello, Rupesh'} des={'Create or Enchance Your Resume '} />
        <div className="flex  gap-8 ">

          <button onClick={() => setCreateResume(true)} className=' bg-[#f7eeee] h-46 w-38 px-5 py-4 shadow cursor-pointer hover:shadow-xl rounded-3xl hover:border-2 border-dotted border-blue-500 ease-in-out transition-all duration-100 ' >
            <i className=" text-3xl fa-solid fa-plus"></i>
            <p className=' text-gray-600 text-sm' >Make New Resume </p>
          </button>

          <button onClick={() => setUploadResume(true)} className=' rounded-3xl  bg-[#f7eeee] h-46 w-38 mx-w-38  px-5 py-4 shadow cursor-pointer hover:shadow-xl   hover:border-2 border-dotted border-blue-500 ease-in-out transition-all duration-100  ' >
            <i className=" text-3xl fa-solid fa-cloud-arrow-up "></i>
            <p className=' text-gray-600 text-sm' > Upload existing  </p>
          </button>

        </div>

        <hr className='mt-10 bg-amber-800 ' />
        <div className="created-resume-history">
          <Title title={'Resume History'} />
        </div >

        <div className="flex h-20 gap-3  ">
          {resumeData.map((resume, idx) => {
            return (
              <button key={idx} className=' cursor-pointer relative '
                onMouseEnter={() => setHoverOnHistory(idx)}
                onMouseLeave={() => setHoverOnHistory(null)}
              >
                <div className='h-46 w-38 px-5 py-4 shadow-xl rounded-4xl flex flex-col justify-center items-center hover:shadow-gray-500 duration-200 ease-in-out gap-4  ' style={{ background: colors[idx % colors.length] }} >
                  <i className="fa-solid fa-user-tie text-white text-5xl"> </i>
                  <h1 className=' text-sm text-amber-200 text-center'>  {resume.personal_info.full_name}'s <span className=' text-amber-50'>Resume </span>   </h1>
                  <p className=' text-[8px] text-white '>  {resume.updatedAt.slice(0, 10)}</p>
                </div>

                {
                  hoverOnHistory === idx && (
                    <div className="flex gap-2 absolute top-3 right-4 ">
                      <i className="fa-solid fa-trash text-sm text-white "></i>
                      <i className="fa-solid fa-pen text-sm text-white "></i>

                    </div>
                  )
                }
              </button>
            )
          })}
        </div>

        

        {
          createResume && (
            //  form of Create Resume 
            <form
            onClick ={() => {
              setCreateResume(false)
            }}
             onSubmit={(e) => {
              createNewResume();
              e.preventDefault();
              
            }
            
            
            }  className=' fixed bg-opacity-50  inset-0 bg-black/70  flex items-center justify-center z-10 ' >
              <div onClick={ e => {
                e.stopPropagation();
              }}  className=" absolute gap-3   top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2  bg-amber-50 h-60 w-120 px-10 py-10 flex flex-col border-dashed border-blue-400 border-2  justify-center ">
                <h1 className='text-xl font-bold '>Create a Resume </h1>
                <i onClick={() => {setCreateResume(false);} } className="fa-solid fa-xmark absolute top-4 right-8 cursor-pointer "> </i>
                <label htmlFor="tile">Title : </label>
                <input className='h-8 bg-white px-4 border-black  border-1 outline-none  ' 
                type="text" name="" 
                id="title" 
                value={formTitle}
                onChange={chnageFormtitle }  
                 />
                <button onClick={() => {
                  setFormTitle('');
                  
                }}  className=' bg-amber-300 py-1 px-2 w-40 border-1 border-blue-950 cursor-pointer'>
                  Create Resume
                </button>
              </div>
            </form>
          )
        }


      </div>
    </>
  )
}

export default Dashboard