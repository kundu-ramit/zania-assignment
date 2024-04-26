package controllers

import (
	"net/http"

	"github.com/gin-gonic/gin"
	"github.com/kundu-ramit/zania-backend/domain/entity"
	"github.com/kundu-ramit/zania-backend/service"
)

type CatController interface {
	GetAllCats(c *gin.Context)
	AddCat(c *gin.Context)
	RemoveCat(c *gin.Context)
}

type catController struct {
	service service.CatService
}

func NewCatController() CatController {
	return &catController{
		service: service.NewCatService(),
	}
}

func (sc catController) GetAllCats(c *gin.Context) {

	cats, err := sc.service.GetAllCats(c)
	if err != nil {
		c.JSON(http.StatusBadRequest, err.Error())
		return
	}
	c.JSON(http.StatusOK, cats)
}

func (sc catController) AddCat(c *gin.Context) {

	var cat entity.Cat
	if err := c.BindJSON(&cat); err != nil {
		c.String(http.StatusBadRequest, "Invalid Cat body")
		return
	}
	err := sc.service.AddCat(c, cat)
	if err != nil {
		c.JSON(http.StatusBadRequest, err.Error())
		return
	}
	c.JSON(http.StatusOK, cat)
}

func (sc catController) RemoveCat(c *gin.Context) {

	id := c.Param("id")
	err := sc.service.RemoveCat(c, id)
	if err != nil {
		c.JSON(http.StatusBadRequest, err.Error())
		return
	}
	c.JSON(http.StatusOK, `All scrapes have been deleted`)
}
