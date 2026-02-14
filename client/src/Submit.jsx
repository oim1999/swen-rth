import { useState } from "react"
import { Button } from "@/components/ui/button"
import {
    Item,
    ItemActions,
    ItemContent,
    ItemDescription,
    ItemMedia,
    ItemTitle,
} from "@/components/ui/item"
import { BadgeCheckIcon, ChevronRightIcon } from "lucide-react"




export function ItemDemo() {
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)
    const [form, setForm] = useState({})

     const handleSubmit = async () => {
        setLoading(true)
        setError(null)
        const payload ={
            name: form.name,
            email: form.email,
            phone: form.phone,
            employmentStatus: form.employmentStatus,
            experienceLevel: form.experienceLevel,
            portfolio: form.portfolio,
            resume: form.resume, //i need to change to parse the file to base64 or something like that
            stage: "before-continue",
            submittedAt: new Date().toISOString(),
    
        }

       try {
            const response = await fetch("/api/submit-stage", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(payload),
            })

            if (!response.ok) {
                const errData = await response.json().catch(() => ({}))
                throw new Error(errData.message || `Server error (${response.status})`)
            }

            const result = await response.json()
            console.log("Success:", result)

            
        } catch (err) {
            console.error("Submit failed:", err)
            setError(err instanceof Error ? err.message : "Something went wrong")
        } finally {
            setLoading(false)
        }
        
    }
    return (
        <div className="flex w-full max-w-md flex-col gap-6">
            <h1 className="scroll-m-20 text-center text-4xl font-extrabold tracking-tight text-balance">
                Before you continue
            </h1>
            <Item variant="outline">
                <ItemContent>
                    <ItemTitle></ItemTitle>
                    <ItemDescription>
                        Make sure your input is truthful and valid before submitting.
                    </ItemDescription>
                </ItemContent>
                <ItemActions>
                    <Button variant="outline" size="sm">
                        Back
                    </Button>
                </ItemActions>
            </Item>
            <Item variant="outline">
                <ItemContent>
                    <ItemTitle></ItemTitle>
                    <ItemDescription>
                        If all is correct, click on Submit to proceed to the next stage.
                    </ItemDescription>
                </ItemContent>
                <ItemActions>
                    <Button variant="outline" size="sm" onClick={handleSubmit}>
                        Submit
                    </Button>
                </ItemActions>
            </Item>

        </div>
    )
}
