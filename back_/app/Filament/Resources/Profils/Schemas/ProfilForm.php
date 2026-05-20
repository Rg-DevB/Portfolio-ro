<?php

namespace App\Filament\Resources\Profils\Schemas;

use Filament\Forms\Components\FileUpload;
use Filament\Forms\Components\TextInput;
use Filament\Forms\Components\Textarea;
use Filament\Schemas\Components\Section;
use Filament\Schemas\Schema;

class ProfilForm
{
    public static function configure(Schema $schema): Schema
    {
        return $schema
            ->components([

                Section::make('Profil')
                    ->description('Prevent abuse by limiting the number of requests per period')

                    ->schema([

                        Section::make('')
 
                            ->schema([
                                    FileUpload::make('photo')
                                    ->default(null)
                                    ->image(),      
                            ]),

                        Section::make('')
 
                            ->schema([
                                
                                TextInput::make('full_name')
                                    ->required(),
                                TextInput::make('title')
                                    ->required(),
                                Textarea::make('description')
                                ->columnSpanFull(),
                            ])
                            ->columns(2),
                            

                        Section::make('')
                            ->description('Prevent abuse by limiting the number of requests per period')

                            ->schema([

                                TextInput::make('email')
                                    ->label('Email address')
                                    ->email()
                                    ->default(null),
                                TextInput::make('phone')
                                    ->tel()
                                    ->default(null),
                            ])
                            ->columnSpanFull()
                            ->columns(2),

                        Section::make('')
                            ->description('Prevent abuse by limiting the number of requests per period')

                            ->schema([
                                TextInput::make('location')
                                    ->default(null),
                                TextInput::make('cv_url')
                                    ->url(),
                                Textarea::make('social_links')
                                    ->default(null)
                                    ->columnSpanFull(),
                            ])


                    ])->columnSpanFull(),

            ]);
    }
}
