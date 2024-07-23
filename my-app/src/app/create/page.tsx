"use client"
import { common, topics } from "@/type/index"
import { useRouter } from "next/navigation"
export default function Create() {
    const router = useRouter();
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
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({title,body})
        }
        await fetch(process.env.NEXT_PUBLIC_API_URL+`topics`, options)
        .then(async res => {
            const response:topics.getData = await res.json()
            router.push(`/read/${response.id}`)
            router.refresh();
        })
    }
    return(
        <form onSubmit={(e) => sumbit(e as formEvent )}>
            <p>
                <input type="text" name="title" placeholder="title" />
            </p>
            <p>
                <textarea name="body" placeholder="body" />
            </p>
            <p>
                <input type="submit" value="create" />
            </p>
        </form>
    )
}