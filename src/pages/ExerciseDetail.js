import React , {useEffect,useState}from 'react'
import { useParams } from 'react-router-dom'
import { Box } from '@mui/material'
import { exerciseOptions,fetchData, youtubeOptions } from '../utils/fetchData'

import Detail from '../components/Detail'
import SimilarExercises from '../components/SimilarExercises'
import ExerciseVideos from '../components/ExerciseVideos'
const ExerciseDetail = () => {

  const [exerciseDetail, setExerciseDetail] = useState({})

  const [exerciseVideos, setExerciseVideos] = useState({})
  const [targetMuscleExercises, setTargetMuscleExercises] = useState([]);

  const {id} =useParams();
  
  useEffect(()=>{
    const fetchExercisesData = async ()=>{
      const exerciseDbUrl = "https://exercisedb.p.rapidapi.com";
      const youtubeUrl = "https://youtube-search-and-download.p.rapidapi.com"

      const exerciseDetailData = await fetchData(`${exerciseDbUrl}/exercises/exercise/${id}`,exerciseOptions)
      setExerciseDetail(exerciseDetailData)

      const exercisevideosData = await fetchData(`${youtubeUrl}/search?query=${exerciseDetailData.name}`,youtubeOptions)
      setExerciseVideos(exercisevideosData.contents)

      const targetMuscleExercisesData = await fetchData(`${exerciseDbUrl}/exercises/target/${exerciseDetailData.target}`, exerciseOptions);
      setTargetMuscleExercises(targetMuscleExercisesData);


    }
    fetchExercisesData();

  },[id])



  return (
  <Box fontFamily={"monospace"}>
    <Detail exerciseDetail={exerciseDetail}/>
    <ExerciseVideos exerciseVideos={exerciseVideos} name={exerciseDetail.name}/>
    <SimilarExercises targetMuscleExercises={targetMuscleExercises}/>

  </Box>
  )
}

export default ExerciseDetail