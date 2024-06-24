const baseurl ="https://lqeiv6e0eh.execute-api.ap-south-1.amazonaws.com/prod"

const endpoints={
   url:baseurl,
   aws:"https://dronevala.com/api/aws/upload",
//    Academy....................
venderDetails:"/admin/ADetails",
addCourse:"/admin/addCourse",
findCourses:"/admin/findCourse",
updateCourse:"/admin/updateCourse",
updateImage:"",
addTrainer:"/admin/addTrainer",
addSyllabus:"/admin/addSyllabus",
addGallery:"",
addViedo:"",
updateCourseDate:"/admin/courseStartDate",

// user Routes
// Academy
AllCourses:"/user/user",
academyBanner:"/user/getImageBanner",
academyDetails:"/user/fullcourseDetails",
getCourseSyllabus:"/user/getSyllabus",
getTrainer:"/user/getTrainers",
getReviews:'/user/getreviews',
getBanner:"/user/getImageBanner",

// Services
AllServices:'/user/serviceDetails',
serviceperson : "/user/servicePerson",
Typeofservicesoffer : "/user/serviceTypes",
droneType: "/user/DroneTypes",
serviceBanner:"/user/getserviceBanner",
serviceGallery:"/user/servicephotoGallery",
serviceReviews:"/user/getreviews",
travelcharges:"/user/getTcharge"

}

export default endpoints