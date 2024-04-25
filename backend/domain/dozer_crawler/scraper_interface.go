package scraper

import (
	"context"

	"github.com/kundu-ramit/zania-backendnd/domain/entity"
)

type Scraper interface {
	ScrapePage(ctx context.Context) ([]entity.BullDozer, error)
}
