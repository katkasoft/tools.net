package main

import (
	"github.com/gin-gonic/gin"
	"tools.net/backend"
	"tools.net/backend/config"
)

func main() {
	r := gin.Default()
	backend.SetupRoutes(r)
	r.Run(config.Host + config.Port)
}
