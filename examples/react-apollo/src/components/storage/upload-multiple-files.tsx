import { Button } from '@/components/ui/button'
import { Progress } from '@/components/ui/progress'
import { cn } from '@/lib/utils'
import { FileItemRef, useFileUploadItem, useMultipleFilesUpload } from '@nhost/react'
import { FiCheck, FiCheckCircle, FiLoader, FiUpload, FiX } from 'react-icons/fi'
import { useDropzone } from 'react-dropzone'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

interface UploadMultipleFilesProps {
  onUpload?: () => void
}

function FileItem({ fileRef }: { fileRef: FileItemRef }) {
  const { progress, isUploaded, name, isError } = useFileUploadItem(fileRef)

  return (
    <div className="flex flex-row items-center justify-center w-full gap-4">
      <span className="truncate">{name}</span>
      <Progress value={progress} className="h-2" />
      {isUploaded && <FiCheck className="text-green-500" />}
      {isError && <FiX className="text-red-500" />}
    </div>
  )
}

export default function UploadMultipleFiles({ onUpload }: UploadMultipleFilesProps) {
  const { add, upload, files, isUploaded, isError, isUploading, clear } = useMultipleFilesUpload()

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    multiple: true,
    onDropAccepted: (files) => add({ files })
  })

  const handleUploadFiles = async () => {
    await upload()
    onUpload?.()
  }

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>FiUpload multiple files</CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col gap-4">
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
              <p>Drag a file here or click to select</p>
            </div>
          )}
        </div>

        <div>
          {files.map((file) => (
            <FileItem key={file.id} fileRef={file} />
          ))}
        </div>

        <div className="flex flex-row w-full gap-4">
          <Button className="w-full" onClick={handleUploadFiles}>
            FiUpload
          </Button>
          <Button className="w-full" onClick={clear}>
            Cancel
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
