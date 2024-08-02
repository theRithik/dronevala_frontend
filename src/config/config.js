// const baseurl ="https://lqeiv6e0eh.execute-api.ap-south-1.amazonaws.com/prod"
// const baseurl ="https://server.dronevala.com"
const baseurl ="https://vauni363b1.execute-api.ap-south-1.amazonaws.com/prod"
const endpoints={
   url:baseurl,
   aws:"https://dronevala.com/api/aws/upload",
   imageprefix:"https://dronevala.s3.ap-south-2.amazonaws.com/",
   contactus:'/user/contact',

   // vendor

   vcalender:'/admin/CalenderEvent',
   jobpost:'/admin/jobpost',
   jonnames:'/admin/jobtitle',
   jobpoststatus:'/admin/jobstatus',
   // orders 
   vendorAcademyOrders:"/admin/getOrderDetails",
vendorServiceOrders:"/admin/ServiceOrdersList",
vendorCourseOrder:"/admin/courseOrderID",
vendorServiceOrderID:"/admin/serviceOrderID",
//    Academy....................
vendorDetails:"/admin/ADetails",
vendorFullDetails:"/admin/fulllDetails",
vendorUpdate:"/admin/updateAdmin",
vendorImage:"/admin/updateImage",
addCourse:"/admin/addCourse",
findCourses:"/admin/findCourse",
updateCourse:"/admin/updateCourse",
updateImage:"/admin/updateCourseImage",
addTrainer:"/admin/addTrainer",
addSyllabus:"/admin/addSyllabus",
addBanner:"/admin/courseBanner",
addGallery:"/admin/courseGallery",
addViedo:"/admin/courseStartDate",
updateCourseDate:"/admin/courseStartDate",


//  Service....................
addService:'/admin/addservice',
addserviceType:"/admin/serviceType",
addServiceImage:"/admin/serviceImage",
addServceDrone:"/admin/droneType",
addServiceLocation:"/admin/addLocation",
servicesFind:'/admin/findService',
serviceDates:'/admin/updateServiceDates',
servicePhoto:'/admin/addserviceImage',
sBanner:'/admin/addserviceBanner',
sGallery:'/admin/addserviceGallery',


// Rental
addRental:"/admin/addRental",
addrentalProduct:"/admin/addRentalProduct",
findRental:"/admin/findProducts",
updateRentalImage:"/admin/updateRentalImage",
updateRentalProduct:"/admin/UpdateRentalProduct",
addRentalGallery:"/admin/rentalGallery",
RentalBanner:"/admin/rentalBanner",
Rentalproductstatus:"/admin/productstatus",
vendorRentalOrderDetail:"/admin/rentalorderDetails",
vendorRentalOrders:'/admin/rentalorders',

// vendor Login
vendorLogin:"/admin/instituteLogin",
vendorloginAd:"/admin/adminPhotoad",
vendorRegister:"/admin/emailVerfication",
vendorGoggleReg:"/admin/googleRegister",
vendorGoogleLogin:"/admin/vgoogleLogin",
vendorEmailVerify:"/Admin/instituteRegister",
addbasicDetails:"/admin/updateAdminDetails",
addBranch:'/admin/addBranch',
addbasicDetails2:"/admin/category",


// user Routes
userLogin:"/user/userLogin",
userRegister1:"/user/verifyEmail",
userVerfiyEmail:"/user/registerVerify",
usergoogleLogin:"/user/google/login",
usergoogleRegister:"/user/google/register",
usercourseorder:"/user/userCourseOrderDetails",
userserviceorder:"/user/userServiceOrderDetails",
userrentalorder:"/user/userRentalOrderDetails",
userstoreorder:"/user/userStoreOrderDetails",
courseorderDetail:"/user/courseOrderFullDetils",
serviceorderDetail:"/user/serviceOrderFullDetils",
userReviews:"/user/userReviews",
userName:"/user/userName",
postReview:"/user/postReview",
userprofilephoto:"/user/profilephoto",
adduserPhoto:"/user/adduserImage",
userDetails:"/user/getUser",
updateuserDetals:"/user/UpdateProfile",


// Academy
AllCourses:"/user/user",
academyBanner:"/user/getImageBanner",
academyDetails:"/user/fullcourseDetails",
getCourseSyllabus:"/user/getSyllabus",
getTrainer:"/user/getTrainers",
getReviews:'/user/getreviews',
getBanner:"/user/getImageBanner",
getGallery:"/user/courseGallery",
getAdvance:"/user/courseAdvanceFee",
iniatedCourseOrder:"/user/courseorderInitated",

// Services
AllServices:'/user/serviceDetails',
serviceperson : "/user/servicePerson",
Typeofservicesoffer : "/user/serviceTypes",
droneType: "/user/DroneTypes",
serviceBanner:"/user/getserviceBanner",
serviceGallery:"/user/servicephotoGallery",
serviceReviews:"/user/getreviews",
travelcharges:"/user/getTcharge",
initatedServiceOrder:"/user/orderInitated",


// Rental
AllRental:'/user/allrental',
rentalDetails:'/user/RentalDetails',
getRentalBanner:'/user/getRentalBanner',
getRentalGallery:'/user/rentalgallery',
initatedRentalOrder:'/user/initatedRentalOrder',
getRentalOrder:'/user/getuserRentalorder',


// jobs
getjobs:'/user/getjobs',
jobdetails:'/user/getjobdetails',

// admin...........
AdLogin:"/super/login",
AdTravelCharges:"/super/gettravel",
AdgetCourseorder:"/super/getcourseorder",
AdgetServiceorder:"/super/getServiceorder",
AdUpdateCharges:"/super/UpdatetCharge",
Adupdatecoursefee:"/super/courseFee",
AdAddtravelcharges:"/super/travelCharges",
Adgetvendors:"/super/getallvendorsdetails",
AdgetUsers:"/super/getAllusers",
AdgetAllOrders:"/super/getAllOrders",
}

export default endpoints


// academy folder
// service folder
// vendors folder
// users