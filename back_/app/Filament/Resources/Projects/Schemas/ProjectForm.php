<?php

namespace App\Filament\Resources\Projects\Schemas;

use Filament\Forms\Components\DatePicker;
use Filament\Forms\Components\DateTimePicker;
use Filament\Forms\Components\FileUpload;
use Filament\Forms\Components\Select;
use Filament\Forms\Components\TextInput;
use Filament\Forms\Components\Textarea;
use Filament\Forms\Components\Toggle;
use Filament\Forms\Components\ToggleButtons;
use Filament\Schemas\Schema;

class ProjectForm
{
    public static function configure(Schema $schema): Schema
    {
        return $schema
            ->components([

                TextInput::make('name')
                    ->required(),

                Select::make('user_id')
                    ->relationship('user', 'name')
                    ->required(),

                Select::make('categories')
                    ->relationship('category', 'name')
                    ->multiple()
                    ->preload()
                    ->searchable(),

                Select::make('technologies')
                    ->relationship('technology', 'name')
                    ->multiple()
                    ->preload()
                    ->searchable(),

                TextInput::make('title')
                    ->required(),

                TextInput::make('slug')
                    ->required(),

                Textarea::make('description')
                    ->required()
                    ->columnSpanFull(),

                FileUpload::make('thumbnail')
                    ->image()
                    ->default(null),

                TextInput::make('demo_url')
                    ->default(null),

                TextInput::make('github_url')
                    ->default(null),

                Toggle::make('featured')
                    ->required(),

                ToggleButtons::make('status')
                    ->options(['draft' => 'Draft', 'published' => 'Published'])
                    ->default('draft')
                    ->grouped()
                    ->required(),

                DateTimePicker::make('published_at'),

                DatePicker::make('date'),

                TextInput::make('order')
                    ->required()
                    ->numeric()
                    ->default(0),
            ]);
    }
}
