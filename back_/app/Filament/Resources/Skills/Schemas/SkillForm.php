<?php

namespace App\Filament\Resources\Skills\Schemas;

use Filament\Forms\Components\Select;
use Filament\Forms\Components\TextInput;
use Filament\Forms\Components\Slider;
use Filament\Schemas\Schema;

class SkillForm
{
    public static function configure(Schema $schema): Schema
    {
        return $schema
            ->components([
                Select::make('user_id')
                    ->relationship('user', 'name')
                    ->required(),

                TextInput::make('name')
                    ->required(),

                TextInput::make('icon')
                    ->default(null),


                TextInput::make('level')
                    ->required()
                    ->numeric()
                    ->default(0),


                Select::make('type')
                    ->options([
                        'frontend' => 'Frontend',
                        'backend' => 'Backend',
                        'soft' => 'Soft',
                        'tools & devOps' => 'Tools& dev ops',
                        'database' => 'Database',
                        'language' => 'Language',
                        'framework' => 'Framework',
                        'other' => 'Other',
                    ])->default(null),

                TextInput::make('order')
                    ->required()
                    ->numeric()
                    ->default(0),
            ]);
    }
}
