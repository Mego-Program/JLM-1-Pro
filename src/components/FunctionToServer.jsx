import axios from "axios";


export async function getAllData(){
    try {
        const response = await axios.post('http://localhost:8137/projects/get_all_data')
        console.log(response.data);
        // setTasks(response.data)
        return response.data
        
      } catch (error) {
        console.error('Error fetching tasks:', error.message);
        return null
      }
}

export const update_project_column_text = async(projectID,columnID,columnText) =>{
    try {
        const response = await axios.post('http://localhost:8137/projects/update_project_column_text',{
          projectId: projectID,
          columnID:columnID,
          columnText:columnText,
        });  
        
      } catch (error) {
        console.error('Error fetching tasks:', error.message);
        return null
      }
} 

export const update_tasks_status = async(taskId,newColumn) => {
  try {
    const response = await axios.post('http://localhost:8137/tasks/update_tasks_status',{
        taskId:taskId,
        newColumn:newColumn
      })
      console.log(taskId);
      console.log(newColumn);
  } catch (error) {
    console.log(error);
  }

}

export async function getUser() {
  try {
    const response = await axios.post(
      "http://localhost:8137/projects/get_users",
    );
      // console.log('users:',response.data);
      console.log(response.data);
    return response.data;
    
  } catch (error) {
    console.error("Error fetching tasks:", error.message);
    return null;
  }
}