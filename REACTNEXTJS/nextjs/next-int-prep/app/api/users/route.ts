export async function GET() {
  return Response.json({
    message: "Hello from the API route!"
  })
}

export async function POST() {
  return Response.json({
    message : "Creating user"
  })
}

export async function PUT() {
  return Response.json({
    message : "Updating user"
  })
}

export async function DELETE() {
  return Response.json({
    message : "Deleting user"
  })
}