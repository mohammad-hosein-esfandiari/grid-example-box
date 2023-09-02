interface TableItemsTypes  {
    title:"Reserve" | "Pending" | "Completed",
    status:"reserve" | "pending" | "completed",
}
export const tableItems:TableItemsTypes[] = [
    {title:"Reserve",status:"reserve"},
    {title:"Pending",status:"pending"},
    {title:"Completed",status:"completed"},
]