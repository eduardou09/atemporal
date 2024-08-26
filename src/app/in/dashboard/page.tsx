"use client"


import { ChangeEvent, useEffect, useRef, useState } from "react"

import { supabase } from "@/config/supabaseClient"

import { alertError, alertSuccess } from "@/components/Alert/alert"


import Sidebar from "@/components/Sidebar/sidebar"
import { Table, TableBody, TableCell, TableColumn, TableHeader, TableRow } from "@nextui-org/table"



const Dashboard = () => {
    // const { values, setValues } = useStore();

    const [users, setUsers] = useState<any[]>([]);
    const [isSmall, setIsSmall] = useState<boolean>(true);

    useEffect(() => {
        loadForm();
    }, []);

    // Function to load users from Supabase
    const loadForm = async () => {
        const { data, error } = await supabase
            .from("form")
            .select("*");
    
        if (error) {
            console.error("Error loading form data:", error);
            alertError("Failed to load form data");
        } else {
            setUsers(data);
        }
    };
    

    console.log(users);

    const handleClick = () => {
        setIsSmall(!isSmall);
    };
    return (
      <></>
    //     <div className="bg-black flex">
    //         <Sidebar 
    //             isSmall={isSmall}
    //             handleClick={handleClick}
    //         />
    //         <div className="flex-1 p-5">
    //         <Table aria-label="Example static collection table">
    //   <TableHeader>
    //     <TableColumn>NAME</TableColumn>
    //     <TableColumn>ROLE</TableColumn>
    //     <TableColumn>STATUS</TableColumn>
    //   </TableHeader>
    //   <TableBody>
    //     <TableRow key="1">
    //       <TableCell>Tony Reichert</TableCell>
    //       <TableCell>CEO</TableCell>
    //       <TableCell>Active</TableCell>
    //     </TableRow>
    //     <TableRow key="2">
    //       <TableCell>Zoey Lang</TableCell>
    //       <TableCell>Technical Lead</TableCell>
    //       <TableCell>Paused</TableCell>
    //     </TableRow>
    //     <TableRow key="3">
    //       <TableCell>Jane Fisher</TableCell>
    //       <TableCell>Senior Developer</TableCell>
    //       <TableCell>Active</TableCell>
    //     </TableRow>
    //     <TableRow key="4">
    //       <TableCell>William Howard</TableCell>
    //       <TableCell>Community Manager</TableCell>
    //       <TableCell>Vacation</TableCell>
    //     </TableRow>
    //   </TableBody>
    // </Table>
    //         </div>
    //     </div>
    );


}
export default Dashboard