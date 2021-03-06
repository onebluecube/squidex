/*
 * Squidex Headless CMS
 *
 * @license
 * Copyright (c) Squidex UG (haftungsbeschränkt). All rights reserved.
 */

import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { Observable } from 'rxjs';

import { ContentsState } from './../state/contents.state';

@Injectable()
export class UnsetContentGuard implements CanActivate {
    constructor(
        private readonly usersState: ContentsState
    ) {
    }

    public canActivate(): Observable<boolean> {
        return this.usersState.select(null).map(u => u === null);
    }
}