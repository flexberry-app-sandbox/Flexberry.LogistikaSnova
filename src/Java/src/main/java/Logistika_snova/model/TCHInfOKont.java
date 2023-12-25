package Logistika_snova.model;

import org.eclipse.persistence.annotations.Convert;
import org.eclipse.persistence.annotations.Converter;
import Logistika_snova.utils.UUIDConverter;

import javax.persistence.*;
import java.util.UUID;

import com.sap.olingo.jpa.metadata.core.edm.annotation.EdmIgnore;

/**
 * Entity implementation class for Entity: ТЧИнфОКонт
 */
@Entity(name = "IISLogistika_snovaТЧИнфОКонт")
@Table(schema = "public", name = "ТЧИнфОКонт")
public class TCHInfOKont {

    @Id
    @Converter(converterClass = UUIDConverter.class, name = "primarykey")
    @Convert("primarykey")
    @Column(name = "primarykey", length = 16, unique = true, nullable = false)
    private UUID primarykey;

    @EdmIgnore
    @Converter(converterClass = UUIDConverter.class, name = "DokumPostav")
    @Convert("DokumPostav")
    @Column(name = "ДокумПостав", length = 16, unique = true, nullable = false)
    private UUID _dokumpostavid;

    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "DokumPostav", insertable = false, updatable = false)
    private DokumPostav dokumpostav;

    @EdmIgnore
    @Converter(converterClass = UUIDConverter.class, name = "ZagruzKontejn")
    @Convert("ZagruzKontejn")
    @Column(name = "ЗагрузКонтейн", length = 16, unique = true, nullable = false)
    private UUID _zagruzkontejnid;

    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "ZagruzKontejn", insertable = false, updatable = false)
    private ZagruzKontejn zagruzkontejn;

    @EdmIgnore
    @Converter(converterClass = UUIDConverter.class, name = "ZagruzkaBarzhi")
    @Convert("ZagruzkaBarzhi")
    @Column(name = "ЗагрузкаБаржи", length = 16, unique = true, nullable = false)
    private UUID _zagruzkabarzhiid;

    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "ZagruzkaBarzhi", insertable = false, updatable = false)
    private ZagruzkaBarzhi zagruzkabarzhi;


    public TCHInfOKont() {
        super();
    }

    public void setPrimarykey(UUID primarykey) {
        this.primarykey = primarykey;
    }

    public UUID getPrimarykey() {
        return primarykey;
    }


}