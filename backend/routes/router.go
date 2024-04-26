package routes

import (
	"net/http"

	"github.com/gin-contrib/cors"
	"github.com/gin-gonic/gin"
	controllers "github.com/kundu-ramit/zania-backend/controller"
)

func SetupRouter() *gin.Engine {

	router := gin.Default()
	config := cors.DefaultConfig()
	config.AllowAllOrigins = true
	router.Use(cors.New(config))

	catController := controllers.NewCatController()

	router.GET("/", func(c *gin.Context) {
		c.JSON(http.StatusOK, gin.H{
			"message": "healthy",
		})
	})

	//find all cats
	router.GET("/get/all", catController.GetAllCats)

	//add a new cat
	router.POST("/add", catController.AddCat)

	//delete a specific cat
	router.DELETE("/remove/:id", catController.RemoveCat)

	return router
}
