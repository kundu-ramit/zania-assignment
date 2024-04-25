package scraper

import (
	"context"

	"github.com/kundu-ramit/zania-backendnd/domain/entity"
)

type Parser interface {
	Parse(ctx context.Context, html string) (*entity.BullDozer, error)
}
