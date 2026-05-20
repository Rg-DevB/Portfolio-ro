<?php

namespace App\Filament\Resources\Socials\Schemas;

use Filament\Forms\Components\TextInput;
use Filament\Schemas\Schema;

class SocialForm
{
    public static function configure(Schema $schema): Schema
    {
        return $schema
            ->components([
                TextInput::make('platform')
                    ->required(),
                TextInput::make('url')
                    ->required(),
                TextInput::make('icon')
                    ->default(null),
                TextInput::make('order')
                    ->required()
                    ->numeric()
                    ->default(0),
            ]);
    }
}
