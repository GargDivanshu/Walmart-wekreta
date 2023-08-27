import React from "react";
import {Table, TableHeader, TableColumn, TableBody, TableRow, TableCell} from "@nextui-org/react";



export default function ReviewTable({reviews}) {
    return (
      <Table aria-label="Example static collection table mx-auto">
        <TableHeader>
          <TableColumn>VENDOR ID</TableColumn>
          <TableColumn>REVIEWER'S EMAIL</TableColumn>
          <TableColumn>REVIEW</TableColumn>
        </TableHeader>
        <TableBody>
        {
            reviews.map((item) => {
              return (
                <TableRow key={item._id}>
                <TableCell>{item._id}</TableCell>
                <TableCell>{item.email}</TableCell>
                <TableCell>{item.msg}</TableCell>
              </TableRow>
              )
            })
          }
          
        </TableBody>
      </Table>
    )
  }