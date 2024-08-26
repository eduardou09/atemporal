import { Toaster, toast } from "react-hot-toast"

<Toaster
  position="top-center"
  reverseOrder={false}
/>

export const alertSuccess = (text:string) => {
    
    toast.success(text, {
        style: {
           backgroundColor: "#1F1F1F",
           color: "#FFFFFF",
        },
        
    });

}

export const alertError = (text:string) => {

    toast.error(text, {
        style: {
           backgroundColor: "#1F1F1F",
           color: "#FFFFFF",
        },
        
    });
}