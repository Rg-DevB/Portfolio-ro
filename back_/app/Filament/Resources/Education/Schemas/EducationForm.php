<?php

namespace App\Filament\Resources\Education\Schemas;

use Filament\Forms\Components\DatePicker;
use Filament\Forms\Components\TextInput;
use Filament\Forms\Components\Textarea;
use Filament\Schemas\Components\Section;
use Filament\Schemas\Schema;

class EducationForm
{
    public static function configure(Schema $schema): Schema
    {
        return $schema
            ->components([
                Section::make('Education Details')
                    ->description('Manage your educational background information.')
                    ->schema([
                        Section::make('')
                            ->schema([
                                TextInput::make('school')
                                    ->label('School / Institution')
                                    ->required()
                                    ->maxLength(255),
                                TextInput::make('degree')
                                    ->required()
                                    ->maxLength(255),
                            ])
                            ->columns(2),

                        Section::make('')
                            ->description('Field of study and duration')
                            ->schema([
                                TextInput::make('field')
                                    ->required()
                                    ->maxLength(255)
                                    ->columnSpanFull(),
                                DatePicker::make('start_date')
                                    ->required(),
                                DatePicker::make('end_date'),
                            ])
                            ->columns(2),

                        Section::make('')
                            ->schema([
                                Textarea::make('description')
                                    ->columnSpanFull(),
                            ]),
                    ])
                    ->columnSpanFull(),
            ]);
    }
}
