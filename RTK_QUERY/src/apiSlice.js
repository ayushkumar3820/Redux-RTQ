import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query";



export const api=createApi({
    baseQuery:fetchBaseQuery({baseUrl:"http://localhost:3000"}),
    tagTypes:["Tasks"],
    endpoints:(builder)=>({
        getTasks:builder.query({
            query:()=>"/tasks",
            transformErrorResponse:(tasks)=> tasks.reverse(),
            providesTags:["Tasks"],
        }),

        addTask:builder.mutation({
            query:(task)=>({
                url:"/tasks",
                method:"POST",
                body:task
            }),
            invalidatesTags:["Tasks"],
            async onQueryStarted(task,{dispatch,queryFulfilled}){
                const patchResult=dispatch(api.util.updateQueryData("getTasks",undefined,(draft)=>{
                    draft.unshift({id:crypto.randomUUID(),...task});
                }));
                try{
                    await queryFulfilled;

                }catch{patchResult.undo()}
            }
        }),
        updateTask:builder.mutation({
            query:({id,...updateTask})=>({
                url:`/task/${id}`,
                method:"PATCH",
                body:updateTask,
            }),
            invalidatesTags:["Tasks"],
            async onQueryStarted({id,...updateTask},{dispatch,queryFulfilled}){
                const patchResult=dispatch(
                    api.util.upsertQueryData("getTasks",undefined,(taskList)=>{
                        const taskIndex=taskList.findIndex((element)=>element.id === id);
                        taskList[taskIndex]={...taskList[taskIndex],...updateTask}
                    })
                )
                try{
                    await queryFulfilled;
                }catch{
                    patchResult.undo();
                }
            }
        }),
        deleteTask:builder.mutation({
            query:(id)=>({
                url:`/tasks/${id}`,
                method:"DELETE",
            }),
            invalidatesTags:["Tasks"],
            async onQueryStarted(id,{dispatch,queryFulfilled}){
                const patchResult=dispatch(
                    api.util.upsertQueryData("getTasks",undefined,(taskList)=>{
                        const taskIndex=taskList.findIndex((element)=>element.id === id);
                        taskList.splice(taskIndex,1)
                    })
                );
                try{await queryFulfilled;}catch{
                    patchResult.undo();
                }
            }
        })
    })
})

export const {
    useGetTasksQuery,
    useAddTaskMutation,
    useUpdateTaskMutation,
    useDeleteTaskMutation,
  } = api;