package backend

import "github.com/gin-gonic/gin"

func SetupRoutes(r *gin.Engine) {
	r.Static("/static", "./public")

	r.GET("/favicon.ico", func(ctx *gin.Context) {
		ctx.File("public/favicon.ico")
	})

	r.GET("/calc", func(ctx *gin.Context) {
		ctx.File("public/html/calc.html")
	})
}
