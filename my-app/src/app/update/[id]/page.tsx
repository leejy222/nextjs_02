"use client"
import { common, topics } from "@/type/index"
import { useParams, useRouter } from "next/navigation"
import { useEffect, useState } from "react";
export default function Update() {
    const [title, setTitle] = useState<string>('');
    const [body, setBody] = useState<string>('');
    const router = useRouter();
    const params = useParams();
    const id = params.id as string;
    useEffect(() => {
      fetch(process.env.NEXT_PUBLIC_API_URL+`/topics/${id}`)
      .then(async res => {
        const response =await res.json() as topics.getData
        setTitle(response.title)
        setBody(response.body)
      });
    },[])
    type formEvent = {
        target: {
            title : { value : string},
            body: { value : string}
        }
    } & React.FormEvent<HTMLFormElement>
    async function sumbit(e:formEvent) {
        // onSubmit 화면변경 막기
        e.preventDefault();
        const title:string = e.target.title.value;
        const body:string = e.target.body.value;
        const options = {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({title,body})
        }
        await fetch(process.env.NEXT_PUBLIC_API_URL+`topics/${id}`, options)
        .then(async res => {
            const response:topics.getData = await res.json()
            router.push(`/read/${response.id}`)
            router.refresh();
        })
    }
    return(
        <form onSubmit={(e) => sumbit(e as formEvent )}>
            <p>
                <input type="text" name="title" placeholder="title" value={title} 
                onChange={e => setTitle(e.target.value)}/>
            </p>
            <p>
                <textarea name="body" placeholder="body" value={body}
                onChange={e => setBody(e.target.value)}/>
            </p>
            <p>
                <input type="submit" value="update" />
            </p>
        </form>
    )
}