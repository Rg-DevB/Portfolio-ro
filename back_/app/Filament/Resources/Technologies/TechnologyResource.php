<?php

namespace App\Filament\Resources\Technologies;

use App\Filament\Resources\Technologies\Pages\ManageTechnologies;
use App\Models\Technology;
use BackedEnum;
use Filament\Actions\BulkActionGroup;
use Filament\Actions\DeleteAction;
use Filament\Actions\DeleteBulkAction;
use Filament\Actions\EditAction;
use Filament\Actions\ViewAction;
use Filament\Forms\Components\Select;
use Filament\Forms\Components\TextInput;
use Filament\Infolists\Components\TextEntry;
use Filament\Resources\Resource;
use Filament\Schemas\Schema;
use Filament\Support\Icons\Heroicon;
use Filament\Tables\Columns\TextColumn;
use Filament\Tables\Table;
use UnitEnum;

class TechnologyResource extends Resource
{
    protected static ?string $model = Technology::class;

    protected static string|BackedEnum|null $navigationIcon = Heroicon::CpuChip;

    protected static ?string $recordTitleAttribute = 'Technology';

    protected static string|UnitEnum|null $navigationGroup = 'Content CMS';

    protected static ?int $navigationSort = 3;


    public static function form(Schema $schema): Schema
    {
        return $schema
            ->components([
                TextInput::make('name')
                    ->required(),
                TextInput::make('icon')
                    ->default(null),
                Select::make('type')
                    ->options(['frontend' => 'Frontend', 'backend' => 'Backend', 'devops' => 'Devops'])
                    ->default(null)
                    ->searchable()
                    ->native(false),

            ]);
    }

    public static function infolist(Schema $schema): Schema
    {
        return $schema
            ->components([
                TextEntry::make('name'),
                TextEntry::make('icon'),
                TextEntry::make('type'),
                TextEntry::make('created_at')
                    ->dateTime(),
                TextEntry::make('updated_at')
                    ->dateTime(),
            ]);
    }

    public static function table(Table $table): Table
    {
        return $table
            ->recordTitleAttribute('Technology')
            ->columns([
                TextColumn::make('name')
                    ->searchable(),
                TextColumn::make('icon')
                    ->searchable(),
                TextColumn::make('type'),
                TextColumn::make('created_at')
                    ->dateTime()
                    ->sortable()
                    ->toggleable(isToggledHiddenByDefault: true),
                TextColumn::make('updated_at')
                    ->dateTime()
                    ->sortable()
                    ->toggleable(isToggledHiddenByDefault: true),
            ])
            ->filters([
                //
            ])
            ->recordActions([
                ViewAction::make(),
                EditAction::make(),
                DeleteAction::make(),
            ])
            ->toolbarActions([
                BulkActionGroup::make([
                    DeleteBulkAction::make(),
                ]),
            ]);
    }

    public static function getPages(): array
    {
        return [
            'index' => ManageTechnologies::route('/'),
        ];
    }
}
