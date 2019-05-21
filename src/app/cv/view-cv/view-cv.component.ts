import { Component, OnInit } from '@angular/core';
import { CV } from 'src/app/models/cv.model';
import { Router, ActivatedRoute } from '@angular/router';
import { CVService } from 'src/app/services/cv.service';

@Component({
  selector: 'app-view-cv',
  templateUrl: './view-cv.component.html',
  styleUrls: ['./../cv.component.css']
})
export class ViewCvComponent implements OnInit {

  cv: CV;

  constructor(private router: Router,private route: ActivatedRoute, private cvService: CVService) { }

  ngOnInit() {
    var userId = this.route.snapshot.paramMap.get("userId");
    this.cvService.findByUserId()
      .subscribe(data => {
        this.cv = data;
      });
  };

}