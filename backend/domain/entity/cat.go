package entity

type Cat struct {
	Type     string `validate:"required"`
	Title    string `validate:"required"`
	Position string `validate:"required"`
	Image    string `validate:"required"`
}
