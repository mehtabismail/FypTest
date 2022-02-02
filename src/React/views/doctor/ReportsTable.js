import React from "react";
import { Table } from "reactstrap";
import FileIcon, { defaultStyles } from "react-file-icon";
import { StyledDropZone } from "react-drop-zone";




function ReportsTable() {
  return (
    <div style={{height:"100vh", display:"flex", flexDirection:"column", alignItems:"center"}}>
      <div style={{display:"flex", justifyContent:"center", alignItems:"center", width:"25%", padding:30, borderRadius:5,marginTop:"5%", borderColor:"gray", borderWidth:1}}>
        <StyledDropZone />
      </div>
      <div style={{backgroundColor: "gray", display:"flex",marginTop:"5%", alignItems:"center", width:"80%", padding:30}}>
      <Table>
        <thead>
          <tr>
            <th  scope="row" className="p-5 text-lg font-bold text-white">
              Type
            </th>
            <th className="text-left p-5 text-lg font-bold text-white">File Name</th>
            <th className="text-right p-5 text-lg font-bold text-white">Date</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th className="p-5">
              <FileIcon
                size={30}
                extension="docx"
                {...defaultStyles.docx}
              />
            </th>
            <th className="text-left p-5">
              Reports.docx
            </th>
            <th className="text-right p-5">
              2021/8/25
            </th>
          </tr>
          <tr>
            <th className="p-5">
              <FileIcon
                size={30}
                extension="pdf"
                {...defaultStyles.docx}
              />
            </th>
            <th className="text-left p-5">
              Medical Patient Report.pdf
            </th>
            <th className="text-right p-5">
              2021/8/25
            </th>
          </tr>
        </tbody>
      </Table>
      </div>
    </div>
  );
}

export default ReportsTable;
