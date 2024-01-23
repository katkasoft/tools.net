package main

import (
	"fmt"

	"github.com/gin-gonic/gin"
	"tools.net/backend"
)

func main() {
	r := gin.Default()
	backend.SetupRoutes(r)
	r.Run()
	fmt.Println("Server started")
}
