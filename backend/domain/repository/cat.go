package repository

import (
	"context"

	"github.com/kundu-ramit/zania-backend/domain/entity"
	"github.com/kundu-ramit/zania-backend/infra/database"
	"gorm.io/gorm"
)

type CatRepository interface {
	Create(ctx context.Context, cat entity.Cat) error
	Fetch(ctx context.Context) ([]entity.Cat, error)
	Update(ctx context.Context, cats []entity.Cat) error
	Delete(ctx context.Context, id string) error
}

type catRepository struct {
	db *gorm.DB
}

func NewCatRepository() CatRepository {
	return &catRepository{
		db: database.Initialize(),
	}
}

func (r catRepository) Create(ctx context.Context, cat entity.Cat) error {
	err := r.db.Create(&cat).Error
	if err != nil {
		return err
	}
	return nil
}

func (r catRepository) Fetch(ctx context.Context) ([]entity.Cat, error) {
	var cats []entity.Cat
	err := r.db.Find(&cats).Error
	if err != nil {
		return nil, err
	}
	return cats, nil
}

func (r catRepository) Delete(ctx context.Context, id string) error {
	err := r.db.Where("id = ?", id).Delete(&entity.Cat{}).Error
	if err != nil {
		return err
	}
	return nil
}

func (r catRepository) Update(ctx context.Context, cats []entity.Cat) error {
	for _, cat := range cats {
		// Update the position for each cat
		if err := r.db.Model(&cat).Where("image", cat.Image).Update("position", cat.Position).Error; err != nil {
			return err
		}
	}
	return nil
}
