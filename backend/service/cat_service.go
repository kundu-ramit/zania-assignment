package service

import (
	"context"

	"github.com/kundu-ramit/zania-backend/domain/entity"
	"github.com/kundu-ramit/zania-backend/domain/repository"
)

type CatService interface {
	GetAllCats(ctx context.Context) ([]entity.Cat, error)
	AddCat(ctx context.Context, cat entity.Cat) error
	RemoveCat(ctx context.Context, id string) error
	UpdateCatPositions(ctx context.Context, cats []entity.Cat) error
}

type catService struct {
	repo repository.CatRepository
}

func NewCatService() CatService {
	return catService{
		repo: repository.NewCatRepository(),
	}
}

func MakeNewCatService(repo repository.CatRepository) CatService {
	return catService{
		repo: repo,
	}
}

func (d catService) GetAllCats(ctx context.Context) ([]entity.Cat, error) {

	cats, err := d.repo.Fetch(ctx)
	if err != nil {
		return nil, err
	}
	return cats, nil
}

func (d catService) AddCat(ctx context.Context, cat entity.Cat) error {

	err := d.repo.Create(ctx, cat)
	if err != nil {
		return err
	}
	return nil
}

func (d catService) UpdateCatPositions(ctx context.Context, cats []entity.Cat) error {
	return d.repo.Update(ctx, cats)
}

func (d catService) RemoveCat(ctx context.Context, id string) error {

	err := d.repo.Delete(ctx, id)
	if err != nil {
		return err
	}
	return nil
}
