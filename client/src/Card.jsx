import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

export function CardSmall() {
  return (
    <Card size="sm" className="mx-auto w-full max-w-sm">
      <CardHeader>
        <CardTitle>Before you continue</CardTitle>
        <CardDescription>
            Make sure you have read and agree to our terms and rules before
            proceeding.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <p>
          Please make sure to check your input's validity before submitting. 
        </p>
      </CardContent>
      <CardFooter>
        <Button variant="outline" size="sm" className="w-full">
          Back
        </Button>
        <Button variant="outline" size="sm" className="w-full">
          Action
        </Button>
      </CardFooter>
    </Card>
  )
}
