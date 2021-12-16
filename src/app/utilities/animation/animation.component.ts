import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  templateUrl: './animation.component.html',
  styleUrls: ['./animation.component.css']
})
export class AnimationComponent implements OnInit {

  type: number = 0;
  displayName: string | null = '';

  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    // this.type = +this.route.snapshot.paramMap.get('type');

    this.route.paramMap.subscribe(param => {
      this.type = +param.get('type')!;
    });

    // this.displayName = this.route.snapshot.queryParamMap.get('name');

    this.route.queryParamMap.subscribe(param => {
      this.displayName = param.get('name');
    });
  }

  plusOne() {
    this.router.navigateByUrl('/utilities/animation/' + (this.type + 1))
  }

}
