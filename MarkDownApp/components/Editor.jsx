import React from "react"
import MDEditor from '@uiw/react-md-editor';




export default function Editor({ currentNote, updateNote }) {
  const [value, setValue] = React.useState("**Hello world!!!**");
  return(
    <div className="container">
    <MDEditor
     height={600}
      value={currentNote.body}
      onChange={updateNote}
      
    />
  
  </div>
  )
}
