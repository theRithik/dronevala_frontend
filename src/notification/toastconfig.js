// import React, { createContext, useCallback, useContext, useState } from "react";
// import Toast from "./toast";

// const Toastcontext = createContext()

// export const ToastProvider =({children})=>{
// const [toast,setToast]=useState({show:false,message:'',small:true})
// const showToast = useCallback((message,small)=>{
//     setToast({show:true,message,small})
// },[])
// const hideToast = ()=>setToast((prev)=>({...prev ,show:false}))
// return(
//     <Toastcontext.Provider value={showToast}>
//         <Toast
//         show={toast.show}
//         message={toast.message}
//         small={toast.small}
//         onClose={hideToast}
//         />
//          {children}
//     </Toastcontext.Provider>
// )

// }

// export const useToast = () => {
//     const context = useContext(Toastcontext);
//     if (!context) {
//       throw new Error('useToast must be used within a ToastProvider');
//     }
//     return context;
//   };
