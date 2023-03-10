<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\{ BelongsTo, BelongsToMany, HasMany };

class Doctor extends Model
{

    protected $fillable = [
        'id',
        'user_id',
        'name',
        'surname',
        'patronymic',
        'speciality_id',
        'avatar_path',
        'photo_path',
    ];

    public function user(): Model|BelongsTo|null
    {
        return $this->belongsTo(User::class)->first();
    }

    public function speciality(): BelongsToMany
    {
        return $this->belongsToMany(Speciality::class,'doctor_speciality','doctor_id','speciality_id');
    }
    public function department(): BelongsToMany
    {
        return $this->belongsToMany(Department::class,'doctor_department','doctor_id','department_id');
    }
        public function schedule(): HasMany
        {
      return $this->hasMany(Schedule::class);
    }
}
