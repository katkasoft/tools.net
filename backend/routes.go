package backend

import "github.com/gin-gonic/gin"

func SetupRoutes(r *gin.Engine) {
	r.Static("/static", "./public")

	r.GET("/favicon.ico", func(ctx *gin.Context) {
		ctx.File("public/favicon.ico")
	})

	r.GET("/calc", func(ctx *gin.Context) {
		ctx.File("public/views/calc.html")
	})
	r.GET("/clock", func(ctx *gin.Context) {
		ctx.File("public/views/clock/clock.html")
	})
	r.GET("/stopwatch", func(ctx *gin.Context) {
		ctx.File("public/views/clock/stopwatch.html")
	})
}
