import { IDropZone } from "@/interfaces/componets";
import React, { useCallback } from "react";
import { useDropzone } from "react-dropzone";
import { FaImages } from "react-icons/fa6";


export const DropZone = ({ img, onChange,width }: IDropZone) => {
    const onDrop = useCallback(
        (acceptedFiles: File[]) => {
            onChange(acceptedFiles);
        },
        [onChange],
    );

    const { getRootProps, getInputProps } = useDropzone({ onDrop, maxFiles: 1 });

    return (
        <div className={`flex items-center justify-center w-16 h-16 bg-gray-200 rounded-md ${width}`}>
            <div {...getRootProps()}>
                <input {...getInputProps()} />
                {img?.length === 0 || !img ? (
                   <FaImages className="w-6 h-6" />
                ) : (
                    <div className="w-16 h-16 rounded-md">
                        {img && <img src={img} alt="" className="w-16 h-16 rounded-md object-cover" />}
                    </div>
                )}
            </div>
        </div>
    );
};
