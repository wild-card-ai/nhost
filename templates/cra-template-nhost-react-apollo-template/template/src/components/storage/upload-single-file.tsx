import { useFileUpload } from '@nhost/react'
import { FiCheckCircle, FiLoader, FiUpload, FiX } from 'react-icons/fi'
import { useDropzone } from 'react-dropzone'
import { cn } from '@/lib/utils'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

export default function UploadSingleFile() {
  const { upload, isUploaded, isUploading, isError } = useFileUpload()

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    multiple: false,
    onDropAccepted: async (files) => {
      if (files.length > 0) {
        upload({ file: files[0] })
      }
    }
  })

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>FiUpload a single file</CardTitle>
      </CardHeader>
      <CardContent>
        <div
          {...getRootProps()}
          className={cn(
            'w-full h-40 bg-slate-50 border-2 transition-colors duration-300 border-dashed rounded-md flex flex-col items-center justify-center',
            isDragActive && 'border-blue-500'
          )}
        >
          <input {...getInputProps()} />

          {isUploaded ? (
            <div className="flex flex-col items-center justify-center gap-2 text-green-600">
              <FiCheckCircle className="w-5 h-5" />
              <span>Uploaded successfully</span>
            </div>
          ) : isUploading ? (
            <div className="flex flex-col items-center justify-center gap-2">
              <FiLoader className="w-5 h-5 animate-spin-fast text-slate-500" />
              <span>Uploading</span>
            </div>
          ) : isError ? (
            <div className="flex flex-col items-center justify-center gap-2 text-red-600">
              <FiX className="w-5 h-5" />
              <span>Uploaded with error</span>
            </div>
          ) : (
            <div
              className={cn(
                'flex flex-col items-center justify-center transition-colors',
                isDragActive && 'text-blue-500'
              )}
            >
              <FiUpload className="w-5 h-5" />
              <p>Drop a file here or click to select a file</p>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  )
}
