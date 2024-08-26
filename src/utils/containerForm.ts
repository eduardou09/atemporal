import create from 'zustand';
import { SetState } from 'zustand';

interface State {
  values: any[]; // Define el tipo de tu estado aquí
  setValues: (values: any[]) => void; // Define el tipo de tu función setter aquí
}

const defaultValue = {
    name: "",
    email: "",
};


const useStore = create((set: SetState<any>) => ({
  values: (defaultValue),
  setValues: (values:any) => set({ values }),
  
}));

export default useStore;


