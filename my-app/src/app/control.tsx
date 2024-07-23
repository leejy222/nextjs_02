"use client"
import Link from "next/link";
import { useParams, useRouter } from "next/navigation";

export function Control() {
  const router = useRouter();
  const params = useParams();
  const id = params.id as string;
  const options = {method:'DELETE'}
  function remove() {
    fetch(process.env.NEXT_PUBLIC_API_URL+`topics/${id}`,options)
      .then(() => {
        router.push('/');
        router.refresh();
      })
  }

    return (
          <ul>
            <li><Link href="/create">Create</Link></li>
            {id ? <>
              <li><Link href={"/update/"+id}>Update</Link></li>
              <li><input type="button" value="delete" onClick={() => remove()}/></li>
            </> : null}
          </ul>
      )
  }
  